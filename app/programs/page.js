import { Suspense } from 'react';
import Programs from './contents/Programs'
import Loading from '@/app/Loading';


const ProgramPage = () => {
    return (
        <Suspense fallback={<Loading />}  >
            <div>
                <Programs />
            </div>
        </Suspense>
    );
}

export default ProgramPage;