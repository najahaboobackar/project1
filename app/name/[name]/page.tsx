

const PredictedAge=async(name:string)=>{
  const res=await fetch(`https://api.agify.io/?name=${name}`)
  return res.json();
}
const PredictedGender=async(name:string)=>{
  const res=await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json();
}
const PredictedCountry=async(name:string)=>{
  const res=await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json();
}
interface Params{
 params:{ name:string} ;
}


export default async function Name({params}:Params) {
  const ageData=PredictedAge(params.name);
  const genderData=PredictedGender(params.name);
  const countryData=PredictedCountry(params.name);
  const [age,gender,country]= await Promise.all([ageData,genderData,countryData]);
  return (
    
    <div>
      <div>
        <div>personal info</div>
        <div>Age:{age?.age}</div>
        <div>gender:{gender?.gender}</div>
        <div>country:{country?.country[0]?.country_id}</div>
        
      </div>
    </div>
  )
}
