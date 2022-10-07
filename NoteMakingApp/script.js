let notesModal = document.getElementById("notes-modal");
const toggleNotesModal = () => {
    notesModal.classList.toggle("hidden");
};

const note = (heading, description, date, color) => {
    return `
<div id="" class="col-span-1 mx-4 h-64 flex flex-col justify-between ${color} dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
        <div>
            <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">${heading}</h4>
            <p class="text-gray-800 dark:text-gray-100 text-sm">${description}</p>
        </div>
        <div>
            <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p class="text-sm">${date}</p>
                <button
                    class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                    aria-label="edit note" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil"
                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`};

const clearNotes = () => {
    localStorage.clear();
    location.reload();
}



const addNote = () => {
    let notesContainer = document.getElementById("notes-container");
    const heading = document.getElementById("heading").value;
    const description = document.getElementById("description").value;
    let date = new Date();
    date = date.toDateString();
    const colors = ["bg-gray-700", "bg-red-400", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-indigo-400", "bg-pink-200", "bg-gray-600"];
    let n = note(heading, description, date, colors[Math.floor(Math.random() * colors.length)]);
    localStorage.setItem(Date.now(), n);

    notesContainer.innerHTML += n;
    toggleNotesModal();
}
window.onload = () => {
    const notesContainer = document.getElementById("notes-container");
    for (let i = 0; i < localStorage.length; i++) {
        const data = localStorage.getItem(localStorage.key(i));
        notesContainer.insertAdjacentHTML("beforeend", localStorage.getItem(localStorage.key(i)));
    }
}