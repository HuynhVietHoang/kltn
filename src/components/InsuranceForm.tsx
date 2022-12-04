import { useState } from 'react';
import { getDownloadURL } from 'firebase/storage';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '../firebase';
import { get } from 'react-hook-form';
import AddProduct from './AddProduct';

function InsuranceForm() {
   
    return (
        <div>
           <AddProduct/>
        </div>
    )
}
export default InsuranceForm