import React from 'react'

function num() {

    let [count, setCount] = usestate(0)
    const pluse = () => {
        if (count < 10) {
            count += 1
            setCount(count)
        } else {
            alert('Task Is Complate')
        }
    }

    const minse = () => {
        if (count > -10) {
            count -= 1
            setCount(count)
        } else {
            alert('Task Is Complate')
        }
    }

    return (
        <div>
            <div className='w-25 py-5 border border-denger m-auto mt-5 text-center rounded'>
                <h1>Counter List</h1>
                <h2>{count}</h2>
                <div className="text-center">
                    <button className='btn btn-sm btn-outline-warning' onClick={pluse}>Dicriment + {count} </button>
                    <button className='btn ms-1 btn-sm btn-outline-success ' onClick={minse}>Inceiment -{count} </button>
                </div>
            </div>
        </div>
    )
}

export default num
