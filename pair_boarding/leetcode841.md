Keys and Rooms:
input is a 2d array of integer filled sub arrays:
rooms = [[1],[0],[1],[]]
number of doors = rooms.length;
(0...rooms.length-1).fill(false);
each time I find a unique key(its not in the set);
    increment a counter that keeps track of the doors i have opened
    return a boolean indicated whether that counter is equal to the total number of doors
[[1],[3],[],[2]]
function openable(rooms){
    roomsToInspect = [0];
    roomsInspected = {};
    while roomsToInspect is not empty
        currentRoom = roomsToInspect[0];
        roomsToinspect.shift();
        for(i=0;i<rooms[currentRoom].length; i++){
            if !room in roomsInspected{
                add to roomsToInspect 
            }
        }
    }
    for each numer from 0 to rooms.length
        check if its in the hashtable and if it isnt return false
}
[[1],[3],[],[2]]
roomsInspected = {0:true};
function openable(rooms){
    let roomsToInspect = [0];
    let roomsInspected = {};
    while (roomsToInspect.length > 0){
        let currentRoom = roomsToInspect[0];
        roomsToInspect.shift();
        roomsInspected[currentRoom] = true;
        for(i=0; i < rooms[currentRoom].length; i++){
            if (!roomsInspected[rooms[currentRoom[i]]]){
                roomsToInspect.push(rooms[currentRoom[i]])
            }
        }
    }
    for(let i = 0; i < rooms.length; i++){
        if (!roomsInspected[i]){
            return false;
        }
    }
    return true;
}