'use client'
import React from "react";

const Page = ({params}:any) => {
    console.log(params.id)
    console.log(params.courseId)



    return (
        <div className='container-body-body'>
            <div className='container-body'>
                <div className="container">
                    <div className="logo">
                        Edusculpt
                    </div>

                    <div className="marquee">
                        Certificate of Completion
                    </div>

                    <div className="assignment">
                        This certificate is presented to
                    </div>

                    <div className="person">
                        Joe Nathan
                    </div>

                    <div className="reason">
                        For deftly defying the laws of gravity<br/>
                        and flying high
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
