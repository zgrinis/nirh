declare module '*.png' {
    const value: string;
    export default value;
}

type View = {
    alias:string,
    component:React.FC,
    title:string,
    initial?:boolean,
}

