import { Contactdata } from '../Models/Contact.js'

export const Contact = async (req, res) => {
    const { name, email, phonenumber, type } = req.body

    let user = await Contactdata.findOne({ email })
    if (name.trim() === "" || email.trim() === "" || phonenumber.trim() === "" || type.trim() === "") {
        res.json({
            message: "Field Should Not Be Empty"
        })
    }

    if (user) {
        return res.json(
            {
                message: "Contact Already Exists"
            }
        )
    }


    user = await Contactdata.create(
        {
            name,
            email,
            phonenumber,
            type,
            user: req.user

        }
    )
    res.json({
        message: "Contact Created Successfully",
        user,
        success: true
    })


}
export const getcontact = async (req, res) => {
    const contactlist = await Contactdata.find()
    if (contactlist) {
        res.json({
            message: "The Contact List Are :",
            contactlist,
            success: true
        })
    }
    res.json({
        message: "No Contact Found",
        success: false
    })
}
export const contactbyid = async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const usercontact = await Contactdata.findById(id)
    if (usercontact) {
        res.json(
            {
                message: "Contact Found",
                usercontact,
                success: true
            }
        )
        res.json({
            message: "Not Found Any Contact",
            success: false
        })
    }
}
export const updatecontactid = async (req, res) => {
    const id = req.params.id
    const { name, email, phonenumber, type } = req.body
    const contactlist = await Contactdata.findByIdAndUpdate(id, {
        name,
        email,
        phonenumber,
        type
    }, { new: true });
    if (!contactlist) {
        res.json({
            message: "No contact found :",
            success: false
        })
    }
    res.json({
        message: "Updated successfully",
        success: true,
        contactlist
    })
}
export const deletecontactid = async (req, res) => {
    const id = req.params.id
    const deletecontact = await Contactdata.findByIdAndDelete(id)

    if (!deletecontact) {
        res.json({
            message: "No contact found :",
            success: false
        })
    }
    res.json({
        message: "Deleted successfully",
        success: true,

    })
}

export const contactbyuserid = async (req, res) => {

    const id = req.params.id
    const usercontact = await Contactdata.findOne({ user: id })
    if (usercontact) {
        res.json(
            {
                message: "Contact Found",
                usercontact: usercontact,
                success: true
            }
        )
        res.json({
            message: "Not Found Any Contact",
            success: false
        })
    }
}