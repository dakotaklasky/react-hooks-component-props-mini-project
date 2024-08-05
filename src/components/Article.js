function getMinuteEmoji(minutes,preview){
    if(!minutes){
        return preview
    }
    else if(minutes < 30){
        return `${'☕️'.repeat(Math.ceil(minutes/5))} ${preview}`
    }
    else{
        return `${"🍱".repeat(Math.ceil(minutes/10))} ${preview}`
    }
}

function Article({title, date ="January 1, 1970",preview,minutes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{getMinuteEmoji(minutes,preview)}</p>
        </article>
    )

}

export default Article;

