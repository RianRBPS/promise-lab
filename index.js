/*
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

    A promise is said to be settled if it is either fulfilled or rejected, but not pending.
*/

const ride = new Promise((resolve, reject) => {
    if  (arrived)   {

        resolve('driver arrived 🚗')

    } else {

        reject('driver bailed 😭')

    }
})

ride
    .then(value => {

        console.log(value)

        // driver arrived 🚗
    })

    .catch(errror => {
        
        console.log(error)

        // driver bailed 😭
    })

    .finally(() => {

        console.log('all setled!')

    })