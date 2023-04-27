/**
 * @param {number[][]} meetings
 * @return {number}
 */
function meetingRooms(meetings) {
  if(!meetings || meetings.length<1)
        return 0;
 const starts = meetings.map(meeting=>meeting[0]).sort((a,b)=>a-b);
 const  ends = meetings.map(meeting=>meeting[1]).sort((a,b)=>a-b);

  let end=0;
  let rooms=0;
 for(let i=0;i<meetings.length;i++){
     if(starts[i]<ends[end])
          rooms++;
     else
          end++;
 }
 return rooms;
}
