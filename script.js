document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");
    let isMatrixMode = false;
    let isMatrix2Running = false;
    let matrixInterval;
    
    // Fake Bootup Sequence
    function showBootSequence() {
        const bootMessages = [
            "Initializing system... ████░░░░░░░░ 45%",
            "Decrypting secure files... ██████░░░░ 67%",
            "Access granted! Welcome, Sachin.",
            "",
"   ██╗  ██╗ █████╗  ██████╗██   ██",
"  ██║  ██║██╔══██╗██╔════╝██  ██", 
" ███████║███████║██║     ██ ██",  
"██╔══██║██╔══██║██║     ████",             
"██║  ██║██║  ██║╚██████╗██ ██",
"╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ██  ██",
"                         ██   ██",
"",
"Type 'help' for available commands.",
        ];

        output.innerHTML = ""; // Clear previous content
        let index = 0;
        let charIndex = 0;
        
        function typeCharacter() {
            if (index < bootMessages.length) {
                if (charIndex < bootMessages[index].length) {
                    output.innerHTML += bootMessages[index][charIndex];
                    charIndex++;
                    setTimeout(typeCharacter, 50); // Speed of typing effect
                } else {
                    output.innerHTML += "\n"; // Move to the next line after full message
                    index++;
                    charIndex = 0;
                    setTimeout(typeCharacter, 500); // Delay before next message
                }
            }
        }
    
        typeCharacter();
    }

    showBootSequence(); // Run the boot sequence on page load

    const commands = {
        help: `
Available commands:
- help: Show this list
- show projects: Display my projects
- show skills: Display my skills
- contact: Get my contact details
- home: Reload the site
- ascii art: Display ASCII text
- hack on: Activate Matrix hack animation
- matrix: Start Matrix Falling Code
- glitch mode: Trigger Glitch Effect
- theme dark: Switch to dark theme
- theme light: Switch to light theme
- clear: Clear the terminal
        `,
        home: function () {
            location.reload(); // Reload the page
        },
        "show projects": `
Projects:
1. RocketAir Clone - Recreated a modern airline website
2. ExoDorm - A marketplace web app for students
3. Internship Portal - A portal to manage internship opportunities
        `,
        "show skills": `
Skills:
- HTML, CSS, JavaScript (Frontend)
- React.js, Next.js, Vanilla
- Node.js, MongoDB, Postgres
- UI/UX Design & Animations
        `,
        contact: `
Contact Me:
Email: sachinmehta247@gmail.com
GitHub: github.com/AEGON247
LinkedIn: linkedin.com/in/sachin-mehta-785704272
        `,
        "ascii art": `
 █████╗  ███████╗ ██████╗  ██████╗ ███╗   ██╗
██╔══██╗ ██╔════╝██╔════╝ ██╔═══██╗████╗  ██║
███████║ █████╗  ██║  ███╗██║   ██║██╔██╗ ██║
██╔══██║ ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║
██║  ██║ ███████╗╚██████╔╝╚██████╔╝██║ ╚████║
╚═╝  ╚═╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝
        `,
        "hack on": function () {
            if (!isMatrixMode) {
                document.body.classList.add("matrix"); // Add matrix mode class
                isMatrixMode = true;
            } else {
                document.body.classList.remove("matrix"); // Remove matrix mode class
                isMatrixMode = false;
            }
        },
        "matrix": function () {
            if (!isMatrix2Running) {
                startMatrixEffect();
                isMatrix2Running = true;
            } else {
                stopMatrixEffect();
                isMatrix2Running = false;
            }
        },
        "glitch mode": function () {
            document.body.classList.add("glitch");
            setTimeout(() => {
                document.body.classList.remove("glitch");
            }, 4000); // Glitch effect lasts 4 seconds
        },
        "theme dark": function () {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "limegreen";
        },
        "theme light": function () {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        },
        clear: function () {
            output.innerHTML = ""; // Clear terminal
        },

        // HIDDEN EASTER EGG COMMAND 🔥
        "iamtheone": function () {
            output.innerHTML += `
            > iamtheone
            You have unlocked THE ONE MODE. System Breach Initiated...
            `;
            document.body.style.backgroundColor = "black";
            document.body.style.color = "red";

            // Play a hacking animation
            let interval = setInterval(() => {
                output.innerHTML += "\nACCESS GRANTED...";
            }, 500);

            setTimeout(() => {
                clearInterval(interval);
                output.innerHTML += "\nJust kidding. 😆 You've found the secret!";
            }, 5000);
        },
    };

    function executeCommand(command) {
        command = command.toLowerCase().trim();
        if (commands[command] !== undefined) {
            if (command === "clear") {
                output.innerHTML = ""; // Clear terminal
            } else if (typeof commands[command] === "function") {
                commands[command](); // Execute function commands
            } else {
                output.innerHTML += `> ${command}\n${commands[command]}\n`;
            }
        } else {
            output.innerHTML += `> ${command}\nCommand not found. Type "help" for available commands.\n`;
        }

        setTimeout(() => {
            output.scrollTo({
                top: output.scrollHeight,
                behavior: "smooth"
            });
        }, 50);
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            executeCommand(input.value);
            input.value = "";
        }
    });
});

window.addEventListener("offline", () => {
    output.innerHTML += "\n🚨 WARNING: You are now offline!\n";
});

window.addEventListener("online", () => {
    output.innerHTML += "\n✅ You are back online!\n";
});

// MATRIX 2 - Falling Code Effect
function startMatrixEffect() {
    matrixInterval = setInterval(() => {
        const matrixCode = document.createElement("div");
        matrixCode.innerText = Math.random() > 0.5 ? "0" : "1";
        matrixCode.classList.add("matrix-code");
        matrixCode.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(matrixCode);

        setTimeout(() => {
            matrixCode.remove();
        }, 3000);
    }, 50);
}

function stopMatrixEffect() {
    clearInterval(matrixInterval);
    document.querySelectorAll(".matrix-code").forEach(el => el.remove());
}