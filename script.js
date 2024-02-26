const text = document.createElement("p");
text.className= "View";

document.body.append(text);
F10();
function F10(){ 
    setTimeout(()=>{
        text.innerHTML = `10`;
    }, 1000);
    F9();
    function F9(){ 
        setTimeout(()=>{
            text.innerHTML = `9`;
        }, 2000);
        F8();
        function F8(){ 
            setTimeout(()=>{
                text.innerHTML = `8`;
            }, 3000);
            F7();
            function F7(){ 
                setTimeout(()=>{
                    text.innerHTML = `7`;
                }, 4000);
                F6();
                function F6(){ 
                    setTimeout(()=>{
                        text.innerHTML = `6`;
                    }, 5000);
                    F5();
                    function F5(){ 
                        setTimeout(()=>{
                            text.innerHTML = `5`;
                        }, 6000);
                        F4();
                        function F4(){ 
                            setTimeout(()=>{
                                text.innerHTML = `4`;
                            }, 7000);
                            F3();
                            function F3(){ 
                                setTimeout(()=>{
                                    text.innerHTML = `3`;
                                }, 8000);
                                F2();
                                function F2(){ 
                                    setTimeout(()=>{
                                        text.innerHTML = `2`;
                                    }, 9000);
                                    F1();
                                    function F1(){ 
                                        setTimeout(()=>{
                                            text.innerHTML = `1`;
                                        }, 10000);
                                        F0();
                                        function F0(){ 
                                            setTimeout(()=>{
                                                text.innerHTML = `Happy Independence Day!`;
                                            }, 11000);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }    
}
