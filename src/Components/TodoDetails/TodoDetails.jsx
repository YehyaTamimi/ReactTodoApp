import { useLocation, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from "./TodoDetailsStyling.js"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@mui/base";
import TextField from '@mui/material/TextField';
import React from 'react';




export default function TodoDetails() {
    const { state } = useLocation();
    const { id } = useParams();
    const [edit, setEdit] = useState(true);
    const [date, setDate] = useState(null);
    const [savedDate, setSavedDate] = useState(null)
    const [title, setTitle] = useState(state.title)
    const [desc, setDesc] = useState("");
    const [priortiy, setPriority] = useState(null);
    const [status, setStatus] = useState(state.check);
    const [inputTitle, setInputTitle] = useState(title)

    const detailStyles = styles();
    const priorityType = {
        low: detailStyles.low,
        medium: detailStyles.mid,
        high: detailStyles.high,
    };

    useEffect(() => {
        if (localStorage.getItem(id)) {
            const states = JSON.parse(localStorage.getItem(id))
            setDesc(states.desc)
            setSavedDate(states.date)
            setPriority(states.priority)

            if (state.check !== states.status) {
                setStatus(state.check)
            } else {
                setStatus(states.status)
            }

            if (state.title !== states.title) {
                setTitle(state.title)
            } else {
                setTitle(states.title)
            }

            setEdit(false)
        }
    }, [])

    const editForm = () => {
        if (edit) {
            if (inputTitle !== "") {
                console.log(inputTitle)
                setTitle(inputTitle);
            }
        }
        setEdit(!edit);
    }

    const adjustTitle = (e) => {
        setInputTitle(e.target.value);
    }

    const adjustDesc = (e) => {
        setDesc(e.target.value);
    }

    const adjustDate = (date) => {
        const date2 = new Date(date?.$d);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }).format(date2);
        setDate(date)
        setSavedDate(formattedDate)
    }

    const saveChanges = () => {
        const storageState = {
            title: title,
            desc: desc,
            date: savedDate,
            priority: priortiy,
            status: status
        }
        console.log(storageState);
        localStorage.setItem(id, JSON.stringify(storageState))
    }


    return (
        <div className={detailStyles.container}>
            <form action="" className={detailStyles.form}>

                {edit ? (
                    <>
                        <TextField
                            className={detailStyles.input}
                            id="filled-search"
                            type="text"
                            variant="standard"
                            value={inputTitle}
                            onChange={adjustTitle}
                            InputProps={{
                                disableUnderline: true
                            }} />

                        <label className={detailStyles.descTitle}>Description</label>
                        <TextareaAutosize className={detailStyles.desc} aria-label="minimum height" minRows={3} placeholder="Enter your text here" value={desc} onChange={adjustDesc} />

                        <label className={detailStyles.descTitle}>Due Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker value={date} onChange={(newValue) => adjustDate(newValue)} className={detailStyles.date} />
                        </LocalizationProvider>

                        <label className={detailStyles.descTitle}>Priority</label>
                        <div className={detailStyles.options}>
                            <Button variant="contained" className={priortiy === "high" ? `${detailStyles.high} ${detailStyles.selected}` : detailStyles.high} onClick={() => setPriority("high")}>High</Button>
                            <Button variant="contained" className={priortiy === "medium" ? `${detailStyles.mid} ${detailStyles.selected}` : detailStyles.mid} onClick={() => setPriority("medium")}>medium</Button>
                            <Button variant="contained" className={priortiy === "low" ? `${detailStyles.low} ${detailStyles.selected}` : detailStyles.low} onClick={() => setPriority("low")}>Low</Button>
                        </div>

                        <label className={detailStyles.descTitle}>Status</label>
                        <div className={detailStyles.options}>
                            <Button variant="contained" className={status === false ? `${detailStyles.incomplete} ${detailStyles.selected}` : detailStyles.incomplete} onClick={() => setStatus(false)} >Incomplete</Button>
                            <Button variant="contained" className={status === true ? `${detailStyles.complete} ${detailStyles.selected}` : detailStyles.complete} onClick={() => setStatus(true)} >Complete</Button>
                        </div>

                        <div className={detailStyles.buttons}>
                            <IconButton className={detailStyles.save} color="success" onClick={editForm}>
                                <CheckIcon />
                            </IconButton>
                        </div>
                    </>
                ) : (
                    <>
                        <label className={detailStyles.title}>{title}</label>

                        {desc !== "" ? (
                            <>
                                <label className={detailStyles.descTitle}>Description</label>
                                <div className={detailStyles.date}>{desc}</div>
                            </>
                        ) : desc}

                        {savedDate && (
                            <>
                                <label className={detailStyles.descTitle}>Due Date</label>
                                <div className={detailStyles.date}>{savedDate}</div>
                            </>
                        )}


                        {priortiy && (
                            <>
                                <label className={detailStyles.descTitle}>Priority</label>
                                <div className={priorityType[priortiy]}>{priortiy}</div>
                            </>)}


                        <label className={detailStyles.descTitle}>Status</label>
                        {status ? <div className={detailStyles.complete}>Complete</div> : <div className={detailStyles.incomplete}>Incomplete</div>}

                        <div className={detailStyles.buttons}>
                            <IconButton className={detailStyles.edit} color="success" onClick={editForm}>
                                <EditIcon />
                            </IconButton>
                            <Link to={`/`} state={{ check: status, title: title, id: id, delete: true }}>
                                <IconButton className={detailStyles.delete} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Link>
                            <Link to={`/`} state={{ check: status, title: title, id: id }}>
                                <Button variant="contained" className={detailStyles.back} onClick={saveChanges}>back</Button>
                            </Link>
                        </div>
                    </>
                )}
            </form>
        </div>
    )

}