"use client"

import React, { useEffect, useRef } from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import axios from "../../../axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Input} from "@nextui-org/react";

const FormClient = ({client,disabled}) => {
  useEffect(()=>{
    const getModepaie=async()=>{
      const res1 =await axios.get(`/utils/modepaiement`)
      const res2 =await axios.get(`/utils/commercial`)
      const res3 =await axios.get(`/utils/devise`)
      setModepaie(res1.data);
      setCommercial(res2.data);
      setDevise(res3.data);
    }
    getModepaie()
  },[])

  const [isLoading, setIsLoading] = React.useState(false);
  const [modepaie, setModepaie] = React.useState();
  const [commercial, setCommercial] = React.useState();
  const [devise, setDevise] = React.useState();


  const [isBloqued, setIsBloqued] = React.useState(client?.BLOQUER =="O");
  const [isPlafonne, setIsPlafonne] = React.useState(client?.plafonnee);
  const [isFactur, setIsFactur] = React.useState(client?.factimediat);

   
  const [reference, setReference] = React.useState(client?.CODE_CLT);
  const [comptable, setComptable] = React.useState(client?.compte_compt);
  const [name, setName] = React.useState(client?.CLIENT);
  const [rc, setRc] = React.useState(client?.RC);
  const [ice, setICE] = React.useState(client?.ICE);
  const [if1, setIf1] = React.useState(client?.IF1);


  const [adresseliv1, setAdresseliv1] = React.useState(client?.ADRESSE1LIV);
  const [adresseliv2, setAdresseliv2] = React.useState(client?.ADRESSE2LIV);
  const [postaleliv, setPostaleliv] = React.useState(client?.CPLIV);
  const [villeliv, setVilleliv] = React.useState(client?.VILLELIV); 
  const [adressefact1, setAdressefact1] = React.useState(client?.ADRESSE1FACT);
  const [adressefact2, setAdressefact2] = React.useState(client?.ADRESSE2FACT);
  const [postalefact, setPostalefact] = React.useState(client?.CPFACT);
  const [villefact, setVillefact] = React.useState(client?.VILLEFACT);
  const [pays, setPays] = React.useState(client?.PAYS);
  //probleeeme
  const [secteur, setSecteur] = React.useState(client?.Site);


  const [tele, setTele] = React.useState(client?.TEL);
  const [tele2, setTele2] = React.useState(client?.telephone2);
  const [fax, setFax] = React.useState(client?.FAX);
  const [email, setEmail] = React.useState(client?.E_MAIL);
  const [site, setSite] = React.useState(client?.Site);
  const [remisecaise, setRemisecaisse] = React.useState(client?.REMCAISSE);
  const [plafond, setPlafond] = React.useState(client?.plafond);
  const [soldereel, setSoldereel] = React.useState(client?.soldereel);
  const [soldeFACTAV, setSoldeFACTAV] = React.useState(client?.solde);
  const [apartirde, setApartirde] = React.useState(client?.APARTIRDE);
  const [delaispaiement, setDelaispaiement] = React.useState(client?.delaisliv);



    function getKeyByValue(jsonObject, targetValue) {
      // if(!jsonObject) return null
      for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key) && jsonObject[key] === targetValue) {
              return key;
          }
      }
      return "Select a value";
   }
  
    const [selectedKeysDevise, setSelectedKeysDevise] = React.useState(new Set(["Select a value"]));
    const selectedValueDevise = React.useMemo(
      () => Array.from(selectedKeysDevise).join(", ").replaceAll("_", " "),
      [selectedKeysDevise]
    );

    const [selectedKeysCommercial, setSelectedKeysCommercial] = React.useState(new Set([client?.CODE_COM||"Select a value"]));
    const selectedValueCommercial = React.useMemo(
      () => Array.from(selectedKeysCommercial).join(", ").replaceAll("_", " "),
      [selectedKeysCommercial]
    );

    const [selectedKeysPaiement, setSelectedKeysPaiement] = React.useState(new Set([client?.REF_MODEPAIE||"Select a value"]));
    
    const selectedValuePaiement = React.useMemo(
      () => Array.from(selectedKeysPaiement).join(", ").replaceAll("_", " "),
      [selectedKeysPaiement]
    );
    const [selectedKeysPaiementPremier, setSelectedKeysPaiementPremier] = React.useState(new Set([client?.ref_modepaiepremier||"Select a value"]));
    
    const selectedValuePaiementPremier = React.useMemo(
      () => Array.from(selectedKeysPaiementPremier).join(", ").replaceAll("_", " "),
      [selectedKeysPaiementPremier]
    );
    function is_numeric(str){
      return /^\d+$/.test(str);
  }
    const save = async() =>{
      setIsLoading(true)
      const payload={
        CODE_CLT:reference||null,
        compte_compt:comptable||null,
        CLIENT:name||null,
        RC:rc||null,
        ICE:ice||null,
        IF1:if1||null,
        ADRESSE1LIV:adresseliv1||null,
        ADRESSE2LIV:adresseliv2||null,
        CPLIV:postaleliv||null,
        VILLELIV:villeliv||null,
        ADRESSE1FACT:adressefact1||null,
        ADRESSE2FACT:adressefact2||null,
        CPFACT:postalefact||null,
        VILLEFACT:villefact||null,
        PAYS:pays||null,
        Secteur:secteur||null,
        TEL:tele||null,
        telephone2:tele2||null,
        FAX:fax||null,
        E_MAIL:email||null,
        Site:site||null,
        REMCAISSE:remisecaise||null,
        plafond:plafond||null,
        soldereel:soldereel||null,
        solde:soldeFACTAV||null,
        APARTIRDE:apartirde||null,
        delaispaiement:delaispaiement||null,
        bloqued:isBloqued||false,
        plafonne:isPlafonne||false,
        factur:isFactur||false,
        REF_MODEPAIE:+selectedValuePaiement.split(" ")[0]||null,
        ref_modepaiepremier:+selectedValuePaiementPremier.split(" ")[0]||null,
        CODE_COM:selectedValueCommercial.split(" ")[0]||null,
        devise:selectedValueDevise.split(" ")[0]||null,
      }
      if(!is_numeric(reference)){
        toast.error("Reference should be a digit", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
          setIsLoading(false)
          return
      }
      if(client){
        try{
          const res =await axios.put(`http://localhost:8000/client/edit/${client.CODE_CLT}`,payload)
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
          toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }
        
      }else{
        try {
          const res =await axios.post(`http://localhost:8000/client/add/`,payload)
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
          console.log(error.response.data.error);
          toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }
      }
      setIsLoading(false)
    }
  return (
    <div className="flex w-full justify-center items-center">
        <ToastContainer/>
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-[90%] h-fit">
        <CardBody className="overflow-hidden">
              <h2 className='text-center font-semibold text-xl pb-12'>Form Client</h2>

              <form className="flex flex-col gap-4" onSubmit={save}>
              <h2 className=' font-medium text-sm'>Identification</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Reference" placeholder="Enter your reference" value={reference} onValueChange={setReference} type="text"  />
                      <Input isDisabled={disabled}   label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text"/>
                  </div>
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled} isRequired  label="Client" placeholder="Enter your name" value={name} onValueChange={setName} type="text" />
                      <Input isDisabled={disabled}    label="RC" placeholder="Enter your RC" value={rc} onValueChange={setRc} type="number"  />
                  </div>
                  <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="ICE" value={ice} onValueChange={setICE} placeholder="Enter your ICE" type="text" />
                      <Input isDisabled={disabled}    label="IF" placeholder="Enter your IF" value={if1} onValueChange={setIf1} type="number"  />
                  </div>
                
                </div>
                <h2 className=' font-medium text-sm '>Adresse</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <Input isDisabled={disabled}   label="Adresse Livraison 1"  value={adresseliv1} onValueChange={setAdresseliv1} placeholder="Enter your Adresse" type="text" />
                <Input isDisabled={disabled}   label="Adresse Livraison 2"  value={adresseliv2} onValueChange={setAdresseliv2} placeholder="Enter your Adresse" type="text" />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Code postal" value={postaleliv} onValueChange={setPostaleliv} placeholder="Enter your Code postal" type="text"  />
                    <Input isDisabled={disabled}   label="Ville" value={villeliv} onValueChange={setVilleliv} placeholder="Enter your pays" type="text" />
                </div>
                <Input isDisabled={disabled}   label="Adresse Facturation 1"  value={adressefact1} onValueChange={setAdressefact1} placeholder="Enter your Adresse" type="text" />
                <Input isDisabled={disabled}   label="Adresse Facturation 2"  value={adressefact2} onValueChange={setAdressefact2} placeholder="Enter your Adresse" type="text" />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Code postal" value={postalefact} onValueChange={setPostalefact} placeholder="Enter your Code postal" type="text"  />
                    <Input isDisabled={disabled}   label="Ville" value={villefact} onValueChange={setVillefact} placeholder="Enter your pays" type="text"  />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text"  />
                    <div className="flex gap-3 items-center px-2">
                    <Input isDisabled={disabled}   label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" r />
                      </div>
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Coordonnees</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled} dis  label="Telephone" value={tele} onValueChange={setTele} placeholder="Enter your Telephone" type="text"  />
                    <Input isDisabled={disabled} dis  label="Telephone" value={tele2} onValueChange={setTele2} placeholder="Enter your Telephone" type="text" />
                </div>
                <Input isDisabled={disabled}   label="Fax" value={fax} onValueChange={setFax} placeholder="Enter your Fax" type="text"  />

                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Site web" value={site} onValueChange={setSite} placeholder="Enter your Site web" type="text"/>
                    <Input isDisabled={disabled}    label="Email" value={email} onValueChange={setEmail} placeholder="Enter your Email" type="email"/>
                </div>

                
              </div>

              <h2 className=' font-medium text-sm '>Autre</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment  :</pre></h3>
                        <Dropdown>
                          <DropdownTrigger disabled={disabled}>
                              <Button 
                              variant="bordered" 
                              className="capitalize px-16"
                              >
                              {selectedValuePaiement}
                              </Button>
                          </DropdownTrigger>
                          <DropdownMenu 
                              aria-label="Single selection actions"
                              variant="flat"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={selectedKeysPaiement}
                              onSelectionChange={setSelectedKeysPaiement}
                              aria-disabled={disabled}
                          >
                            {
                              modepaie?.map((mode)=>(
                                <DropdownItem key={`${mode.REF_MODEPAIE}_${mode.MODEPAIE}`}>{`${mode.REF_MODEPAIE}_${mode.MODEPAIE}`}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>


                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Commercial       :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValueCommercial}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysCommercial}
                            onSelectionChange={setSelectedKeysCommercial}
                            aria-disabled={disabled}
                        >
                            {
                              commercial?.map((com)=>(
                                <DropdownItem key={`${com.REF_COMMERCIAL}_${com.NOM}`}>{`${com.REF_COMMERCIAL}_${com.NOM}`}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Devise           :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValueDevise}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysDevise}
                            onSelectionChange={setSelectedKeysDevise}
                            aria-disabled={disabled}
                        >
                            {
                              devise?.map((dev)=>(
                                <DropdownItem key={`${dev.REF_DEVISE}_${dev.DEVISE}`}>{`${dev.REF_DEVISE}_${dev.DEVISE}`}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                      
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Mode paiement    :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValuePaiementPremier}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysPaiementPremier}
                            onSelectionChange={setSelectedKeysPaiementPremier}
                            aria-disabled={disabled}
                        >
                            {
                              modepaie?.map((mode)=>(
                                <DropdownItem key={`${mode.REF_MODEPAIE}_${mode.MODEPAIE}`}>{`${mode.REF_MODEPAIE}_${mode.MODEPAIE}`}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}   label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" />
                      <Input isDisabled={disabled}    label="Plafond" value={plafond} onValueChange={setPlafond} placeholder="Enter your RFA" type="number" />
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={isBloqued} onValueChange={setIsBloqued} >Bloquer le client</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isPlafonne} onValueChange={setIsPlafonne} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
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
                      <Radio value="datefacture">Date Facture</Radio>
                      <Radio value="findemois">Fin de mois</Radio>
                    </RadioGroup>
                    <Input isDisabled={disabled}    label="Delais de Paiement" value={delaispaiement} onValueChange={setDelaispaiement} placeholder="Delais de paiement" type="number" />
                    <Input isDisabled={disabled}    label="Solde reel" value={soldereel} onValueChange={setSoldereel} placeholder="Delais de livraison" type="number"  />
                    <Input isDisabled={disabled}    label="Solde FACT.AV." value={soldeFACTAV} onValueChange={setSoldeFACTAV} placeholder="Delais de livraison" type="number"  />
                  </div>
                </div>
              
              </div>
               <div className='self-end flex gap-6'>
                {
                  !disabled&&(
                    <>
                    <Button type="submit" isLoading={isLoading} size="md" color='primary' className='px-16  py-2 '>
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

export default FormClient