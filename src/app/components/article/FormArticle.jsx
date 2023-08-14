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

const FormArticle = ({article,disabled}) => {
  useEffect(()=>{
    const getModepaie=async()=>{
      const res1 =await axios.get(`/utils/modepaiement`)
      const res2 =await axios.get(`/utils/commercial`)
      const res3 =await axios.get(`/utils/devise`)
      const res4 =await axios.get(`/utils/taille`)
      const res5 =await axios.get(`/utils/categorietaille`)
      const res6 =await axios.get(`/utils/couleur`)
      const res7 =await axios.get(`/utils/marque`)
      setModepaie(res1.data);
      setCommercial(res2.data);
      setDevise(res3.data);
      setTaille(res4.data);
      setCategorietaille(res5.data);
      setCouleur(res6.data);
      setMarque(res7.data);
    }
    getModepaie()
  },[])

  const [modepaie, setModepaie] = React.useState();
  const [commercial, setCommercial] = React.useState();
  const [devise, setDevise] = React.useState();
  const [taille, setTaille] = React.useState();
  const [categorietaille, setCategorietaille] = React.useState();
  const [couleur, setCouleur] = React.useState();
  const [marque, setMarque] = React.useState();


  const [isBloqued, setIsBloqued] = React.useState(client?.BLOQUER =="O");
  const [isPlafonne, setIsPlafonne] = React.useState(client?.plafonnee);
  const [isFactur, setIsFactur] = React.useState(client?.factimediat);

   
  const [reference, setReference] = React.useState(article?.REF_ART);
  const [comptable, setComptable] = React.useState(article?.compte_compt);
  const [designation, setDesignation] = React.useState(article?.MODELE);
  const [modele, setModele] = React.useState(article?.RC);
  const [taille, setTaille] = React.useState(article?.ICE);
  const [categorietaille, setCategorietaille] = React.useState(article?.ICE);
  const [couleur, setCouleur] = React.useState(article?.COULEUR);
  const [refcouleur, setRefcouleur] = React.useState(article?.REFCOULEUR);
  const [marque, setMarque] = React.useState(article?.IF1);


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
  
    const [selectedKeysDevise, setSelectedKeysDevise] = React.useState(new Set(["text"]));
    const selectedValueDevise = React.useMemo(
      () => Array.from(selectedKeysDevise).join(", ").replaceAll("_", " "),
      [selectedKeysDevise]
    );
    const [selectedKeysTaille, setSelectedKeysTaille] = React.useState(new Set(["text"]));
    const selectedValueTaille = React.useMemo(
      () => Array.from(selectedKeysTaille).join(", ").replaceAll("_", " "),
      [selectedKeysTaille]
    );
    const [selectedKeysCouleur, setSelectedKeysCouleur] = React.useState(new Set(["text"]));
    const selectedValueCouleur = React.useMemo(
      () => Array.from(selectedKeysCouleur).join(", ").replaceAll("_", " "),
      [selectedKeysCouleur]
    );
    const [selectedKeysCategorietaille, setSelectedKeysCategorietaille] = React.useState(new Set(["text"]));
    const selectedValueCategorietaille = React.useMemo(
      () => Array.from(selectedKeysCategorietaille).join(", ").replaceAll("_", " "),
      [selectedKeysCategorietaille]
    );
    const [selectedKeysMarque, setSelectedKeysMarque] = React.useState(new Set(["text"]));
    const selectedValueMarque = React.useMemo(
      () => Array.from(selectedKeysMarque).join(", ").replaceAll("_", " "),
      [selectedKeysMarque]
    );
    const [selectedKeysCommercial, setSelectedKeysCommercial] = React.useState(new Set(["text"]));
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
    const save = async() =>{
      const payload={
        CODE_CLT:reference,
        compte_compt:comptable,
        CLIENT:name,
        RC:rc,
        ICE:ice,
        IF1:if1,
        ADRESSE1LIV:adresseliv1,
        ADRESSE2LIV:adresseliv2,
        CPLIV:postaleliv,
        VILLELIV:villeliv,
        ADRESSE1FACT:adressefact1,
        ADRESSE2FACT:adressefact2,
        CPFACT:postalefact,
        VILLEFACT:villefact,
        PAYS:pays,
        Secteur:secteur,
        TEL:tele,
        telephone2:tele2,
        FAX:fax,
        E_MAIL:email,
        Site:site,
        REMCAISSE:remisecaise,
        plafond:plafond,
        soldereel:soldereel,
        solde:soldeFACTAV,
        APARTIRDE:apartirde,
        delaispaiement:delaispaiement,
        bloqued:isBloqued,
        plafonne:isPlafonne,
        factur:isFactur,
        REF_MODEPAIE:+selectedValuePaiement,
        ref_modepaiepremier:+selectedValuePaiementPremier,
        CODE_COM:selectedValueCommercial,
        devise:selectedValueDevise,
      }
      console.log(payload);
      if(client){
        try{
          const res =await axios.put(`/client/edit/${client.CODE_CLT}`,payload)
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
          const res =await axios.post(`/client/add/`,payload)
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
    }
  return (
    <div className="flex w-full justify-center items-center">
        <ToastContainer/>
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-[90%] h-fit">
        <CardBody className="overflow-hidden">
              <h2 className='text-center font-semibold text-xl pb-12'>Form Article</h2>

              <form className="flex flex-col gap-4">
              <h2 className=' font-medium text-sm'>Picture</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                    <Input isDisabled={disabled}  isRequired label="Image" placeholder="Choose an image" value={reference} onValueChange={setReference} type="text"  ref={ReferenceRef}/>
                </div>
              <h2 className=' font-medium text-sm'>Identification</h2>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">

                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Code article" placeholder="Enter your Code article" value={reference} onValueChange={setReference} type="text"  ref={ReferenceRef}/>
                      <Input isDisabled={disabled}  isRequired label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text" ref={ComptableRef} />
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                  <Input isDisabled={disabled}  isRequired label="Designation" placeholder="Enter your Designation" value={designation} onValueChange={setDesignation} type="text" ref={NameRef}/>
                    <Input isDisabled={disabled}   isRequired label="Modele" placeholder="Enter your Modele" value={modele} onValueChange={setModele} type="number" ref={npatenteRef} />
                  </div>
                    
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
                        <Dropdown>
                          <DropdownTrigger disabled={disabled}>
                              <Button 
                              variant="bordered" 
                              className="capitalize px-16"
                              >
                              {selectedValueTaille}
                              </Button>
                          </DropdownTrigger>
                          <DropdownMenu 
                              aria-label="Single selection actions"
                              variant="flat"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={selectedKeysTaille}
                              onSelectionChange={setSelectedKeysTaille}
                              aria-disabled={disabled}
                          >
                            {
                              taille?.map((mode)=>(
                                <DropdownItem key={mode.REFTAILLE}>{mode.TAILLE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>


                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Commercial      :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValueCategorietaille}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysCategorietaille}
                            onSelectionChange={setSelectedKeysCategorietaille}
                            aria-disabled={disabled}
                        >
                            {
                              categorietaille?.map((ct)=>(
                                <DropdownItem key={ct.REF_COMMERCIAL}>{ct.NOM}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Devise          :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValueCouleur}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysCouleur}
                            onSelectionChange={setSelectedKeysCouleur}
                            aria-disabled={disabled}
                        >
                            {
                              couleur?.map((com)=>(
                                <DropdownItem key={cou.Refcouleur}>{cou.COULEUR}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                      
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Devise          :</pre></h3>
                      <Dropdown>
                        <DropdownTrigger disabled={disabled}>
                            <Button 
                            variant="bordered" 
                            className="capitalize px-16"
                            >
                            {selectedValueMarque}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysMarque}
                            onSelectionChange={setSelectedKeysMarque}
                            aria-disabled={disabled}
                        >
                            {
                              marque?.map((mode)=>(
                                <DropdownItem key={mode.REF_MARQ}>{mode.MARQUE}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                </div>
                </div>
                <h2 className=' font-medium text-sm '>Tarif</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Adresse Livraison 1"  value={adresseliv1} onValueChange={setAdresseliv1} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                    <Input isDisabled={disabled}  isRequired label="Code postal" value={postaleliv} onValueChange={setPostaleliv} placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Ville" value={villeliv} onValueChange={setVilleliv} placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Adresse Livraison 2"  value={adresseliv2} onValueChange={setAdresseliv2} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                    <Input isDisabled={disabled}  isRequired label="Code postal" value={postalefact} onValueChange={setPostalefact} placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Ville" value={villefact} onValueChange={setVillefact} placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Adresse Facturation 1"  value={adressefact1} onValueChange={setAdressefact1} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                    <Input isDisabled={disabled}  isRequired label="Adresse Facturation 2"  value={adressefact2} onValueChange={setAdressefact2} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Info promotions</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                </div>
              </div>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
                </div>
              </div>
              <h2 className=' font-medium text-sm text-center '>Classement</h2>
              <h2 className=' font-medium text-sm '>Parametres</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
              <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                <Input isDisabled={disabled}  isRequired label="Fax" value={fax} onValueChange={setFax} placeholder="Enter your Fax" type="text" ref={faxRef} />

                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Site web" value={site} onValueChange={setSite} placeholder="Enter your Site web" type="text" ref={siteWebRef} />
                    <Input isDisabled={disabled}   isRequired label="Email" value={email} onValueChange={setEmail} placeholder="Enter your Email" type="email" ref={emailRef} />
                </div>

                
              </div>
              <h2 className=' font-medium text-sm '>Parametres</h2>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}  isRequired label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                  <Input isDisabled={disabled}  isRequired label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}  isRequired label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                  <Input isDisabled={disabled}  isRequired label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Caisses familles</h2>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={isBloqued} onValueChange={setIsBloqued} >Bloquer le client</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isPlafonne} onValueChange={setIsPlafonne} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isPlafonne} onValueChange={setIsPlafonne} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={isBloqued} onValueChange={setIsBloqued} >Bloquer le client</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isPlafonne} onValueChange={setIsPlafonne} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isPlafonne} onValueChange={setIsPlafonne} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isFactur} onValueChange={setIsFactur} >Facturation immediate</Checkbox>
                    </div>
              </div>

              <h2 className=' font-medium text-sm '>Autre</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                  <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Mode de Paiment :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>


                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Commercial          :</pre></h3>
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
                                <DropdownItem key={com.REF_COMMERCIAL}>{com.NOM}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Devise          :</pre></h3>
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
                              devise?.map((com)=>(
                                <DropdownItem key={com.REF_DEVISE}>{com.DEVISE}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                      
                    </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Devise          :</pre></h3>
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
                                <DropdownItem key={mode.REF_MODEPAIE}>{mode.MODEPAIE}</DropdownItem>
                              ))
                            }
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Remise caisse" value={remisecaise} onValueChange={setRemisecaisse} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                      <Input isDisabled={disabled}   isRequired label="Plafond" value={plafond} onValueChange={setPlafond} placeholder="Enter your RFA" type="number" ref={RfaRef} />
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
                    <Input isDisabled={disabled}   isRequired label="Delais de Paiement" value={delaispaiement} onValueChange={setDelaispaiement} placeholder="Delais de paiement" type="number" ref={paimentRef} />
                    <Input isDisabled={disabled}   isRequired label="Solde reel" value={soldereel} onValueChange={setSoldereel} placeholder="Delais de livraison" type="number" ref={livraisonRef} />
                    <Input isDisabled={disabled}   isRequired label="Solde FACT.AV." value={soldeFACTAV} onValueChange={setSoldeFACTAV} placeholder="Delais de livraison" type="number" ref={livraisonRef} />
                  </div>
                </div>
              
              </div>
               <div className='self-end flex gap-6'>
                {
                  !disabled&&(
                    <>
                    <Button size="md" color='primary' className='px-16  py-2 ' onClick={save}>
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

export default FormArticle