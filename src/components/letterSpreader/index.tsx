type LetterSpreaderProps = {
    text:string;
}

export function LetterSpreader({text}:LetterSpreaderProps){
    const letterArr = Array.from(text);

    return <span className="letter-spreader-group">
        {[...letterArr].map((letter,index)=><span className='letter-spreader-item' key={index+letter}>{letter}</span>)}
    </span>
}