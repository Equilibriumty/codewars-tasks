const songDecoder = (song) => {
    let res = song.split("WUB").join("");
    return res.split("").join(" ");
};

console.log(songDecoder("WUBAWUBBWUBCWUB"));
