const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      experience,
      about,
      fees,
     
    } = req.body;
    const imgFile=req.file
    console.log({
      name,
      email,
      password,
      speciality,
      experience,
      about,
      fees,
      
    },imgFile)
  } catch {}
};

export{addDoctor}
