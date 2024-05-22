import { MdClose } from 'react-icons/md';
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Button,
    Card,
} from '@mui/material'
// import { useRoutes } from "react-router-dom";



const ViewFullRules = ({ onClose,item }) => {



    return (
        <div>
            <Dialog
                open={open}
                onClose={{}}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                fullWidth
                maxWidth="md"
                className="relative flex flex-col justify-between"
                PaperProps={{ style: { display: 'flex', flexDirection: 'column', height: '80vh', borderRadius: '23px' } }}
            >
                <DialogTitle
                    id="dialog-title"
                    className="flex justify-between uppercase text-[30px] font-normal text-[#FF8500]"
                    style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}
                >
                    rules 
                    <IconButton onClick={onClose}>
                        <MdClose />
                    </IconButton>
                </DialogTitle>

                <DialogContent
                    dividers
                    style={{ flex: '1 1 auto', padding: '0px', overflowY: 'auto',  scrollbarWidth: 'none', msOverflowStyle: 'none'  }}
                >
                    <div className="flex flex-col py-5  "  
                    >
                        <div className="text-[40px] font-Sans text-gray-600">
                            <ul className='flex flex-col md:grid grid-cols-1 ml-8 gap-4 ' style={{ listStyleType: 'none' }}>
                                {item?.ruleList?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 ">
                                        <span className="p-1 rounded-full border border-[#FF8500] bg-[#FF8500] ">
                                        </span>
                                        <span className="text-[#1C2126] text-[20px]">{item.rule_points}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </DialogContent>

                <DialogActions
                    style={{ position: 'sticky', bottom: 0, zIndex: 1, background: 'white' }}
                >
                    <Button onClick={onClose} style={{ color: '#FF8500' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ViewFullRules;