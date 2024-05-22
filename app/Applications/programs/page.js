import { Suspense } from 'react';
import Programs from './contents/Programs'


const ProgramPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}  >
            <div>
                <Programs />
            </div>
        </Suspense>
    );
}

export default ProgramPage;