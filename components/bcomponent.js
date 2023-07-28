import { BuilderComponent, builder } from '@builder.io/react'
import { useEffect, useState } from 'react'

builder.init("4e2fd74e646e4748b901efc919c33c72")

export const BComponent = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null)

    useEffect(() => { 
        builder.get('page', { url: location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])

    return <BuilderComponent model="page" content={builderContentJson} />
}
