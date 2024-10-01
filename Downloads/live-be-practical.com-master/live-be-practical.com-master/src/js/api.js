import axios from "axios";

const leadsquared = async (name,email,phone, course) => {


   
    const leadData = [
      {
        Attribute:'FirstName',
        Value:name.split(' ')[0]
      },
      {
        Attribute:'LastName',
        Value:name.split(' ').slice(1).join(' ') || ''
      },
      {
        Attribute:'Source',
        Value:"Website"
      },
      {
        Attribute:'EmailAddress',
        Value:email
      },
      {
        Attribute:'Phone',
        Value:phone
      },
      {
        Attribute:'mx_Course_Interested',
        Value:course
      }
    ]

    const apiURL = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate';
    const accessKey = 'u$rb6797372f32e841399301c3ac35d60d9';
    const secretKey = 'a36be6d2898fbd4bbf139fe310d674240a9d9b68';
    console.log(leadData);

      try {
         const response = await axios.post(`${apiURL}?postUpdatedLead=false&accessKey=${accessKey}&secretKey=${secretKey}`, leadData);
        //  console.log(response);
         return {success:true, data:response.data};

      } catch (error) {
        return {success:false, data:error.message};
      }
     
  };
  export default leadsquared