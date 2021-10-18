"use strict";

/* Mission4 - 댓글 게시 기능 */
const feedCmt = document.getElementById('feedComment');
const feedBtn = document.getElementById('feedButton');

function btnColor() {
    if(!feedCmt.value.length){
        feedBtn.style.color = "#B8E2FD";
    }else{
        feedBtn.style.color="#0095F6";
    }
}

function commentCheck(){
    if(!feedCmt.value.length){
        alert("댓글을 입력하시오");
    }else{
        commentUp(feedCmt.value);
        
    }
}

function commentUp(value){
    const commentLists = document.getElementById("CMT_WRITE");
    const newCommentList = document.createElement("li");
    const newComment = `<span class="bold">yestagram </span><span>${value}</span><span><span class="delete">x</span>`

    newCommentList.innerHTML = newComment;
    deleteComment(newCommentList);
    commentLists.appendChild(newCommentList); //<ul>태그 안에 <li>코멘트 생성
    feedCmt.value="" //댓글 초기화 
    feedBtn.style.color = "#B8E2FD";
}

function deleteComment(newCommentList){
    const deleteBtn = newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("click", () => newCommentList.remove());
}


const init = () => {
    feedBtn.addEventListener("click",commentCheck);
    feedCmt.addEventListener('keyup', btnColor);
};

init();