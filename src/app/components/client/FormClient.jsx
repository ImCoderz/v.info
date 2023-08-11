"use client"

import React, { useEffect, useRef } from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import axios from 'axios';


import {Input} from "@nextui-org/react";
import { isIdentifier } from 'typescript';

const FormClient = ({client,disabled}) => {
  useEffect(()=>{
    const getModepaie=async()=>{
      const res1 =await axios.get(`http://localhost:8000/utils/modepaiement`)
      const res2 =await axios.get(`http://localhost:8000/utils/commercial`)
      const res3 =await axios.get(`http://localhost:8000/utils/devise`)
      setModepaie(res1.data?.modepaiements);
      setCommercial(res2.data?.commercial);
      setDevise(res3.data?.devise);
    }
    getModepaie()
  },[])

  const [modepaie, setModepaie] = React.useState();
  const [commercial, setCommercial] = React.useState();
  const [devise, setDevise] = React.useState();


  const [isSelected1, setIsSelected1] = React.useState(client?.livrsansbc =="1");
  const [isSelected2, setIsSelected2] = React.useState(client?.fournissiege);
  const [isSelected3, setIsSelected3] = React.useState(client?.fournissiege);
   
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
  const [secteur, setSecteur] = React.useState(client?.Site);


  const [tele, setTele] = React.useState(client?.TEL);
  const [fax, setFax] = React.useState(client?.FAX);
  const [email, setEmail] = React.useState(client?.E_MAIL);
  const [site, setSite] = React.useState(client?.Site);
  const [remisecaise, setRemisecaisse] = React.useState(client?.delailivraison);
  const [plafond, setPlafond] = React.useState(client?.OBJECTIF);
  const [soldereel, setSoldereel] = React.useState(client?.RFA);
  const [soldeFACTAV, setSoldeFACTAV] = React.useState(client?.RFA);
  const [apartirde, setApartirde] = React.useState(client?.APARTIRDE);
  const [delaispaiement, setDelaispaiement] = React.useState(client?.delaisliv);

  
    const ReferenceRef=useRef("fournisseur?.CODE_FRS")
    const ComptableRef=useRef()
    const NameRef=useRef()
    const npatenteRef=useRef()
    const IdentificationRef=useRef()
    const adresseRef=useRef()
    const postalRef=useRef()
    const paysRef=useRef()
    const villeRef=useRef()
    const telephoneRef=useRef()
    const faxRef=useRef()
    const objectifRef=useRef()
    const siteWebRef=useRef()
    const emailRef=useRef()
    const RfaRef=useRef()
    const paimentRef=useRef()
    const livraisonRef=useRef()

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

    const [selectedKeysCommercial, setSelectedKeysCommercial] = React.useState(new Set(["text"]));
    const selectedValueCommercial = React.useMemo(
      () => Array.from(selectedKeysCommercial).join(", ").replaceAll("_", " "),
      [selectedKeysCommercial]
    );

    const [selectedKeysPaiement, setSelectedKeysPaiement] = React.useState(new Set(["Select a value"]));
    
    const selectedValuePaiement = React.useMemo(
      () => Array.from(selectedKeysPaiement).join(", ").replaceAll("_", " "),
      [selectedKeysPaiement]
    );
    const [selectedKeysPaiementPremier, setSelectedKeysPaiementPremier] = React.useState(new Set(["Select a value"]));
    
    const selectedValuePaiementPremier = React.useMemo(
      () => Array.from(selectedKeysPaiementPremier).join(", ").replaceAll("_", " "),
      [selectedKeysPaiementPremier]
    );
    const save = async() =>{
      const payload={
        reference:reference,
        comptable:comptable,
        name:name,
        npatente:patente,
        identification:identif,
        adresse:adresse,
        postale:postale,
        pays:pays,
        ville:ville,
        telephone:tele,
        fax:fax,
        modepaiement:10,
        devise:20,
        // modepaiement:selectedValuePaiement,
        // devise:selectedValueDevise,
        // objectif:objectifRef.current.value,
        objectif:objectif,
        siteWeb:site,
        email:email,
        rfa:rfa,
        livrsansbc:isSelected1,
        fournissiege:isSelected2,
        partir:apartirde,
        paiment:delaispaiement,
        livration:delaislivraison
      }
      console.log(payload);
      const res =await axios.put(`http://localhost:8000/fournisseurs/edit/${fournisseur.CODE_FRS}`,payload)
      console.log(res);
    }
  return (
    <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-[90%] h-fit">
        <CardBody className="overflow-hidden">
              <h2 className='text-center font-semibold text-xl pb-12'>Form Client</h2>

              <form className="flex flex-col gap-4">
              <h2 className=' font-medium text-sm'>Identification</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Reference" placeholder="Enter your reference" value={reference} onValueChange={setReference} type="text"  ref={ReferenceRef}/>
                      <Input isDisabled={disabled}  isRequired label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text" ref={ComptableRef} />
                  </div>
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Client" placeholder="Enter your name" value={name} onValueChange={setName} type="text" ref={NameRef}/>
                      <Input isDisabled={disabled}   isRequired label="RC" placeholder="Enter your RC" value={rc} onValueChange={setRc} type="number" ref={npatenteRef} />
                  </div>
                  <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}  isRequired label="ICE" value={ice} onValueChange={setICE} placeholder="Enter your ICE" type="text" ref={IdentificationRef}/>
                      <Input isDisabled={disabled}   isRequired label="IF" placeholder="Enter your IF" value={if1} onValueChange={setIf1} type="number" ref={npatenteRef} />
                  </div>
                
                </div>
                <h2 className=' font-medium text-sm '>Adresse</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <Input isDisabled={disabled}  isRequired label="Adresse Livraison 1"  value={adresseliv1} onValueChange={setAdresseliv1} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <Input isDisabled={disabled}  isRequired label="Adresse Livraison 2"  value={adresseliv2} onValueChange={setAdresseliv2} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Code postal" value={postaleliv} onValueChange={setPostaleliv} placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Ville" value={villeliv} onValueChange={setVilleliv} placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <Input isDisabled={disabled}  isRequired label="Adresse Facturation 1"  value={adressefact1} onValueChange={setAdressefact1} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <Input isDisabled={disabled}  isRequired label="Adresse Facturation 2"  value={adressefact2} onValueChange={setAdressefact2} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Code postal" value={postalefact} onValueChange={setPostalefact} placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Ville" value={villefact} onValueChange={setVillefact} placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={postalRef} />
                    <div className="flex gap-3 items-center px-2">
                    <Input isDisabled={disabled}  isRequired label="Secteur" value={secteur} onValueChange={setSecteur} placeholder="Enter your Secteur" type="text" ref={postalRef} />
                      </div>
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Coordonnees</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled} dis isRequired label="Telephone" value={tele} onValueChange={setTele} placeholder="Enter your Telephone" type="text" ref={telephoneRef} />
                    <Input isDisabled={disabled} dis isRequired label="Telephone" value={tele} onValueChange={setTele} placeholder="Enter your Telephone" type="text" ref={telephoneRef} />
                </div>
                <Input isDisabled={disabled}  isRequired label="Fax" value={fax} onValueChange={setFax} placeholder="Enter your Fax" type="text" ref={faxRef} />

                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Site web" value={site} onValueChange={setSite} placeholder="Enter your Site web" type="text" ref={siteWebRef} />
                    <Input isDisabled={disabled}   isRequired label="Email" value={email} onValueChange={setEmail} placeholder="Enter your Email" type="email" ref={emailRef} />
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
                      <Checkbox isDisabled={disabled} isSelected={isSelected1} onValueChange={setIsSelected1} >Bloquer le client</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isSelected2} onValueChange={setIsSelected2} >Plafonne</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={isSelected3} onValueChange={setIsSelected3} >Facturation immediate</Checkbox>
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

export default FormClient