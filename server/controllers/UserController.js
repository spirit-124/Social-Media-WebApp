import UserModels from "../models/UserModels.js";

// getUser
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModels.findById(id);

    if (user) {
      const { password, ...otherdetails } = user._doc;
      res.status(200).json(otherdetails);
    } else {
      res.status(404).json("No such user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update User

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserid, currentUserAdminStatus, password } = req.body;
  if (currentUserAdminStatus || currentUserid === id) {
    try {
      const user = await UserModels.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Not Authenticated");
    }
  }
};
