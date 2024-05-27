// import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import Educations from "@/app/educations/contents/Educations";

const EducationPage = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Educations />
            </Suspense>
        </>
    );
}

export default EducationPage;