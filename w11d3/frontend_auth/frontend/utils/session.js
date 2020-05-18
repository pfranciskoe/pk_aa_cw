export const postUser = user => (
    $.ajax({
        url: '/api/users',
        method: 'Post',
        data: {user}
    })
)
export const postSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'Post',
        data: { user }
    })
)

export const deleteSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'Delete'
    })
)