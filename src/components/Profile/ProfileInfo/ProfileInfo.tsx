import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return(
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2HOw9V4OYNT4OKir_E5DnfOy6E8QbeqgVQ&usqp=CAU"
                    alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )

}

export default ProfileInfo



