
import { Suspense } from 'react';
import Careers from './contents/Careers'


const CareersPage = () => {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Careers />
            </div>
        </Suspense>
    );
}

export default CareersPage;