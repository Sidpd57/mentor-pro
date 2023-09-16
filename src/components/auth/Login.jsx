function Login(){
    return (
        <>
            <section class="auth container">
                <p>welcome back</p>
                <h3 class="auth__header">Login into your account</h3>
                <div class="auth__info r-flex">
                    <div class="email">
                        <p>Email</p>
                        <input class="input" type="email" placeholder="john mir">
                    </div>
                    <div class="password">
                        <div class="l-flex">
                            <p>password</p>
                            <a href="" class="link">forget password?</a>
                        </div>
                        <input class="input" type="password" placeholder="happycoding">
                    </div>
                    <button class="login sigin">Login now</button>
                    <p>Not registered yet? <a href="" class="link">Register </a></p>
                </div>
            </section>
        </>
    )
}

export default Login