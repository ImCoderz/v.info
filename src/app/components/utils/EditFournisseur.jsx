"use client"
import Select from "react-select";
import React, { useRef,useEffect } from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {Input} from "@nextui-org/react";
import axios from "../../../axios"

const EditFournisseur = ({fournisseur,disabled,title}) => {
  useEffect(()=>{
    const getModepaie=async()=>{
      const res1 =await axios.get(`/utils/modepaiement`)
      const res3 =await axios.get(`/utils/devise`)
      setModepaie(res1.data);
      setDevise(res3.data);
    }
    getModepaie()
  },[])
  function getKeyByValue(jsonObject, targetValue,set) {
    for (const key in jsonObject) {
        if (jsonObject.hasOwnProperty(key) && jsonObject[key] === targetValue) {
            set(key)
        }
    }
    return null;
}
  const [isLoading, setIsLoading] = React.useState(false);
  const [valued, setValued] = React.useState();
  const [modepaie, setModepaie] = React.useState();
  const [devise, setDevise] = React.useState();




  const [isSelected1, setIsSelected1] = React.useState(fournisseur?.livrsansbc =="1");
  const [isSelected2, setIsSelected2] = React.useState(fournisseur?.fournissiege);
   
  const [reference, setReference] = React.useState(fournisseur?.CODE_FRS);
  const [comptable, setComptable] = React.useState(fournisseur?.compte_compt);
  const [name, setName] = React.useState(fournisseur?.FOURNISSEUR);
  const [patente, setPatente] = React.useState(fournisseur?.patente);
  const [identif, setIdentif] = React.useState(fournisseur?.identif);
  const [adresse, setAdresse] = React.useState(fournisseur?.ADRESSE1);
  const [postale, setPostale] = React.useState(fournisseur?.CP);
  const [pays, setPays] = React.useState(fournisseur?.PAYS);
  const [ville, setVille] = React.useState(fournisseur?.VILLE);
  const [tele, setTele] = React.useState(fournisseur?.TEL);
  const [fax, setFax] = React.useState(fournisseur?.FAX);
  const [email, setEmail] = React.useState(fournisseur?.E_MAIL);
  const [site, setSite] = React.useState(fournisseur?.Site);
  const [objectif, setObjectif] = React.useState(fournisseur?.OBJECTIF);
  const [rfa, setRfa] = React.useState(fournisseur?.RFA);
  const [apartirde, setApartirde] = React.useState(fournisseur?.APARTIRDE);
  const [delaispaiement, setDelaispaiement] = React.useState(fournisseur?.delailivraison);
  const [delaislivraison, setDelaislivraison] = React.useState(fournisseur?.delaisliv);

  

    const [selectedKeysDevise, setSelectedKeysDevise] = React.useState(fournisseur&&({value:fournisseur?.REF_DEVISE,label:modepaie?.filter((mode)=>mode.REF_DEVISE==fournisseur?.REF_DEVISE)[0]}));
  
    const [selectedKeysPaiement, setSelectedKeysPaiement] = React.useState(fournisseur&&({value:fournisseur?.REF_MODEPAIE,label:modepaie?.filter((mode)=>mode.REF_MODEPAIE==fournisseur?.REF_DEVISE)[0]}));
    

    const save = async() =>{
      setIsLoading(true)
      const payload={
        reference:reference,
        comptable:comptable||null,
        name:name,
        npatente:patente||null,
        identification:identif||null,
        adresse:adresse||null,
        postale:postale||null,
        pays:pays||null,
        ville:ville||null,
        telephone:tele||null,
        fax:fax||null,
        modepaiement:+selectedKeysPaiement?.value||null,
        devise:selectedKeysDevise?.value||null,
        objectif:+objectif||null,
        siteWeb:site||null,
        email:email||null,
        rfa:rfa||null,
        livrsansbc:isSelected1||false,
        fournissiege:isSelected2||false,
        partir:apartirde||null,
        paiment:delaispaiement||null,
        livration:delaislivraison||null
      }
      if(fournisseur){
        try{
          const res =await axios.put(`/fournisseurs/edit/${fournisseur.CODE_FRS}`,payload)
          toast.success(res.data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }catch(error){
          console.log(error);
          // toast.error(error.response.data.error, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          //   })
        }
        
      }else{
        try {
          const res =await axios.post(`/fournisseurs/add/`,payload)
          toast.success(res.data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        } catch (error) {
          console.log(error);
          // toast.error(error.response.data.error, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          //   })
        }
      }
      setIsLoading(false)
    }
  return (
    <div className="flex w-full justify-center items-center">
        <ToastContainer/>
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-full h-fit">
        <CardBody className="overflow-hidden">
              <h2 className='text-center font-semibold text-xl pb-12'>{title} Fournisseur</h2>

              <form className="flex flex-col gap-4" onSubmit={save}>
              <h2 className=' font-medium text-sm'>Identification</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Reference" placeholder="Enter your reference" value={reference} onValueChange={setReference} type="number"   />
                      <Input isDisabled={disabled}   label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text"  />
                  </div>
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Fournisseur" placeholder="Enter your name" value={name} onValueChange={setName} type="text" />
                      <Input isDisabled={disabled}    label="N patente" placeholder="Enter your n patente" value={patente} onValueChange={setPatente} type="number"  />
                  </div>
                  <Input isDisabled={disabled}   label="Identification fiscal" value={identif} onValueChange={setIdentif} placeholder="Enter your Identification fiscal" type="text" />
                
                </div>
                <h2 className=' font-medium text-sm '>Adresse</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <Input isDisabled={disabled}   label="Adresse"  value={adresse} onValueChange={setAdresse} placeholder="Enter your Adresse" type="text"  />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Code postal" value={postale} onValueChange={setPostale} placeholder="Enter your Code postal" type="text" />
                    <Input isDisabled={disabled}   label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text"  />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}    label="Ville" value={ville} onValueChange={setVille} placeholder="Enter your Ville" type="text" />
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Coordonnees</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled} dis  label="Telephone" value={tele} onValueChange={setTele} placeholder="Enter your Telephone" type="text"  />
                    <Input isDisabled={disabled}   label="Fax" value={fax} onValueChange={setFax} placeholder="Enter your Fax" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Site web" value={site} onValueChange={setSite} placeholder="Enter your Site web" type="text"  />
                    <Input isDisabled={disabled}    label="Email" value={email} onValueChange={setEmail} placeholder="Enter your Email" type="email"  />
                </div>

                
              </div>

              <h2 className=' font-medium text-sm '>Autre</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                  <div className='flex flex-col gap-5'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                          <Select
                            options={modepaie?.map((mode)=>(
                              {value:mode.REF_MODEPAIE,label:mode.MODEPAIE}
                            ))}
                            placeholder="Select mode de paiement"
                            value={selectedKeysPaiement}
                            onChange={(data)=>setSelectedKeysPaiement(data)}
                            isSearchable={true}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Devise          :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={devise?.map((dev)=>(
                                {value:dev.REF_DEVISE,label:dev.DEVISE}
                              ))}
                              placeholder="Select devise"
                              value={selectedKeysDevise}
                              onChange={(data)=>setSelectedKeysDevise(data)}
                              isSearchable={true}
                            />
                          </div>
                      </div>
                    <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}   label="Objectif" value={objectif} onValueChange={setObjectif} placeholder="Enter your Objectif" type="number" />
                      <Input isDisabled={disabled}    label="RFA" value={rfa} onValueChange={setRfa} placeholder="Enter your RFA" type="number"  />
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={isSelected1} onValueChange={setIsSelected1} >Peut livrer sans bon de commande</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isSelected2} onValueChange={setIsSelected2} >Fournisseur siege</Checkbox>
                    </div>

                  </div>
                  <div className='flex flex-col gap-6'>
                    <RadioGroup
                      label="A partir de :"
                      orientation="horizontal"
                      value={apartirde}
                      onValueChange={setApartirde}
                      isDisabled={disabled}
                    >
                      <Radio value="buenos-aires">Date Facture</Radio>
                      <Radio value="sydney">Fin de mois</Radio>
                    </RadioGroup>
                    <Input isDisabled={disabled}    label="Delais de Paiement" value={delaispaiement} onValueChange={setDelaispaiement} placeholder="Delais de paiement" type="number"  />
                    <Input isDisabled={disabled}    label="Delais de livraison" value={delaislivraison} onValueChange={setDelaislivraison} placeholder="Delais de livraison" type="number"  />
                  </div>
                </div>
              
              </div>
               <div className='self-end flex gap-6'>
                {
                  !disabled&&(
                    <>
                    <Button isLoading={isLoading} size="md" type='submit' color='primary' className='px-16  py-2 '>
                      Save
                    </Button>
                    <Button size="md"  className='px-16   py-2 '>
                      Annuler
                    </Button>
                    </>
                  )
                }
               </div>
              </form>
        </CardBody>
      </Card>
    </div>
    </div>
  )
}

export default EditFournisseur