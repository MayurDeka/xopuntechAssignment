import React, { Component } from "react";
import { Input } from 'antd';
import styles from "./slab.module.css";
import {AiOutlineDelete} from 'react-icons/ai';

class Slab extends Component {
    handleValueChange = (e) => {
        const {name, value} = e.target;
        const {id, network, onValueChange} = this.props;
        const newValue = {
            ...this.props.value,
            [name]: value
        }
        onValueChange(id,network,newValue);

    }
    render() {
        const { id, network, onDeleteSlab, value } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <button onClick={()=>onDeleteSlab(id,network)}>
                        <AiOutlineDelete />
                    </button>
                </div>
                <div className={styles.slabContainer}>
                    <div className={styles.innerContainer}>
                        <h2>Min</h2>
                        <Input placeholder="Min Amount" value={value.min} className={styles.ourInput} name="min" onChange={(e)=>this.handleValueChange(e)}/>   
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>Max</h2>
                        <Input placeholder="Max Amount" value={value.max} className={styles.ourInput} name="max" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>SD</h2>
                        <Input className={styles.ourInput} value={value.sd} name="sd" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>MD</h2>
                        <Input className={styles.ourInput} value={value.md} name="md" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>DIST</h2>
                        <Input className={styles.ourInput} value={value.dist} name="dist" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>RET</h2>
                        <Input className={styles.ourInput} value={value.ret} name="ret" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>A</h2>
                        <Input className={styles.ourInput} value={value.a} name="a" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>M</h2>
                        <Input className={styles.ourInput} value={value.m} name="m" onChange={(e)=>this.handleValueChange(e)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slab;