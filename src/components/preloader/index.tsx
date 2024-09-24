import { useEffect, useState } from "react";
import './preloader.spinner.scss';

type PreloaderProps = {
    imagePaths: string[],
}

export function Preloader({ imagePaths,children }: React.PropsWithChildren<PreloaderProps>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loaded = [];
        let loadedCount = 0;

        imagePaths.forEach((path, index) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                loadedCount += 1;
                loaded[index] = img.src;
                if (loadedCount === imagePaths.length) {
                    setLoading(false);
                }
            };
        });

    }, [imagePaths]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                children
            )}
        </>
    );
};


function Spinner() {
    return <div className="spinner-wrap">
        <div className="spinner">
        </div>
    </div>
}