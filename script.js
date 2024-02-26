const text = document.createElement("h1");
text.className= "View";

document.body.append(text);

const countdown = () => {
    setTimeout(()=>{text.innerHTML = `10`;}, 1000);
    const countdown1 = () => {
        setTimeout(()=>{text.innerHTML = `9`;}, 2000);
        const countdown2 = () => {
            setTimeout(()=>{text.innerHTML = `8`;}, 3000);
            const countdown3 = () => {
                setTimeout(()=>{text.innerHTML = `7`;}, 4000);
                const countdown4 = () => {
                    setTimeout(()=>{text.innerHTML = `6`;}, 5000);
                    const countdown5 = () => {
                        setTimeout(()=>{text.innerHTML = `5`;}, 6000);
                        const countdown6 = () => {
                            setTimeout(()=>{text.innerHTML = `4`;}, 7000);
                            const countdown7 = () => {
                                setTimeout(()=>{text.innerHTML = `3`;}, 8000);
                                const countdown8 = () => {
                                    setTimeout(()=>{text.innerHTML = `2`;}, 9000);
                                    const countdown9 = () => {
                                        setTimeout(()=>{text.innerHTML = `1`;}, 10000);
                                        const Independence = () => {
                                            setTimeout(()=>{text.innerHTML = `Happy Independence Day!`;}, 11000);
                                            
                                        }
                                        Independence();
                                    }
                                    countdown9();
                                }
                                countdown8();
                            }
                            countdown7();
                        }
                        countdown6();
                    }
                    countdown5();
                }
                countdown4();
            }
            countdown3();
        }
        countdown2();
    }    
    countdown1();
}
countdown();