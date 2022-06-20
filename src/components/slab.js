import React, { Component } from "react";
import { Input } from 'antd';
import styles from "./slab.module.css";
import {AiOutlineDelete} from 'react-icons/ai';

class Slab extends Component {
    handleValueChange = (e) => {
        const {name, value} = e.target;
        const {id, network, onValueChange} = this.props;
        let newValue;
        if(name==='sd' || name==='md' || name==='dist' || name==='ret'){
            newValue = {
                ...this.props.value,
                [name]: {
                    ...this.props.value[name],
                    value: value
                }
            }
        } else {
            newValue = {
                ...this.props.value,
                [name]: value
            }
        }
        onValueChange(id,network,newValue);
    }
    handleSlabBtnClick = (category,type) => {
        const {id, network, value, onValueChange} = this.props;
        const newValue = {
            ...value,
            [category]: {
                ...value[category],
                [type]: value[category][type]?false:true
            }
        };
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
                        <Input className={styles.ourInput} value={value.sd.value} name="sd" onChange={(e)=>this.handleValueChange(e)}/>
                        <div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.sd.s?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("sd","s")}>S</div>
                                <div className={value.sd.c?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("sd","c")}>C</div>
                            </div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.sd.f?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("sd","f")}>F</div>
                                <div className={value.sd.p?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("sd","p")}>P</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>MD</h2>
                        <Input className={styles.ourInput} value={value.md.value} name="md" onChange={(e)=>this.handleValueChange(e)}/>
                        <div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.md.s?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("md","s")}>S</div>
                                <div className={value.md.c?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("md","c")}>C</div>
                            </div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.md.f?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("md","f")}>F</div>
                                <div className={value.md.p?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("md","p")}>P</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>DIST</h2>
                        <Input className={styles.ourInput} value={value.dist.value} name="dist" onChange={(e)=>this.handleValueChange(e)}/>
                        <div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.dist.s?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("dist","s")}>S</div>
                                <div className={value.dist.c?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("dist","c")}>C</div>
                            </div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.dist.f?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("dist","f")}>F</div>
                                <div className={value.dist.p?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("dist","p")}>P</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerContainer}>
                        <h2>RET</h2>
                        <Input className={styles.ourInput} value={value.ret.value} name="ret" onChange={(e)=>this.handleValueChange(e)}/>
                        <div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.ret.s?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("ret","s")}>S</div>
                                <div className={value.ret.c?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("ret","c")}>C</div>
                            </div>
                            <div className={styles.slabInnerContainer}>
                                <div className={value.ret.f?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("ret","f")}>F</div>
                                <div className={value.ret.p?styles.slabBtnactive:styles.slabBtnInactive} onClick={()=>this.handleSlabBtnClick("ret","p")}>P</div>
                            </div>
                        </div>
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