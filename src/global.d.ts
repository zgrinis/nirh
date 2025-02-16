declare module '*.png' {
    const value: string;
    export default value;
}

type View = {
    alias:string,
    title:string,
    component?:React.FC,
    initial?:boolean,
}

