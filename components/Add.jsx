import styles from '../styles/Add.module.css'
import { useState } from 'react'
import axios from 'axios'

const Add = ( {setClose} ) => {

    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [extra, setExtra] = useState(null)
    const [extraOptions, setExtraOptions] = useState([])

    const changePrice =  (e, index) => {
        const currentPrices = prices
        currentPrices[index] = e.target.value
        setPrices(currentPrices)
    }

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name] : e.target.value })
    }
    const handleExtra = (e) => {
        setExtraOptions( (prev) => [...prev, extra])
    }
    const handleCreate = async () => {
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'uploads')

        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/pawor/image/upload",data)
            const { url } = uploadRes.data
            const newProduct = {title,desc,prices,extraOptions,img:url}
            await axios.post("http://localhost:3000/api/products", newProduct)
            setClose(true)
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span 
                    onClick={ () => setClose(true) }
                    className={styles.close}
                >
                    X
                </span>
                <h1>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an image</label>
                    <input type="file" onChange={ (e) => setFile(e.target.files[0])} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                        type="text" 
                        className={styles.input}
                        onChange = { (e) => setTitle(e.target.value) }
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea 
                        type="text" 
                        rows={4}
                        onChange = { (e) => setDesc(e.target.value) }
                    />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input 
                            type="number" 
                            placeholder='Small'
                            className = {`${styles.input} ${styles.inputSm}`}
                            onChange = { (e) => changePrice(e, 0) }
                        />
                        <input 
                            type="number" 
                            placeholder='Medium'
                            className = {`${styles.input} ${styles.inputSm}`}
                            onChange = { (e) => changePrice(e, 1) }
                        />
                        <input 
                            type="number" 
                            placeholder='Large'
                            className = {`${styles.input} ${styles.inputSm}`}
                            onChange = { (e) => changePrice(e, 2) }
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input 
                            className = {`${styles.input} ${styles.inputSm}`}
                            type="text"
                            placeholder='Item'
                            name = 'text'
                            onChange = { handleExtraInput }
                        />
                        <input 
                            className = {`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder='Price'
                            name = 'price'
                            onChange = { handleExtraInput }
                        />
                        <button className={styles.extraButton} onClick={handleExtra}>Add</button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map((option) => (
                            <span key={option.text} className={styles.extraItem}>
                                {option.text}
                            </span>
                        ))}
                    </div>

                </div>
                <button className={styles.addButton} onClick={handleCreate}>Create</button>
            </div>
        </div>
    )

}

export default Add