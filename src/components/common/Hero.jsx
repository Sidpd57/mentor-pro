function Hero(){
    return(
        <section className="hero container f-flex">
            <article className="hero__info">
                <div className="hero__text">
                    <p className="hero__pre-subtitle">-Help you be the best version of yourself</p>
                    <h1 className="hero__title">Find the experts from the practical, not the <span className="academic">academic</span></h1>
                    <p className="hero__post-subtitle">we get it that most of you tired of getting academic mentor that only teach about the theory, tbh we are the same</p>
                </div>
                <div className="hero__cta f-flex">
                    <button className="hero__cta__btn f-flex">
                        <p>Get started</p>
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </button>
                    <a href="">Learn More</a>
                </div>
            </article>
            <img className="hero__img" src="./img/4617305.jpg" alt=""/>
        </section>
    )
}

export default Hero