import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "It's my first project", likesCount: 4},
    ]
};
it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("some text");

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3)
})
it('message should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("some text");

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation

    expect(newState.posts[2].message).toBe("some text")
})
it("length of posts should be decremented", () =>{
    // 1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(1)

})
it("after deleting length shouldn't be decrement if id is incorrect", () =>{
    // 1. test data
    let action = deletePost(10000);

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(2)

})
