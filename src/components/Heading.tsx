import React from 'react'

type HeadingProps = {
  title: string
  description: string
}
const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="mt-100 flex flex-col ">
      <h2 className="text-4xl font-bold tracking-tight text-center">{title}</h2>

      {description && (
        <p className="text-lg text-muted-foreground text-center">
          {description}
        </p>
      )}
    </div>
  )
}

export default Heading
