"use client"

import React, { useRef } from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import axios from 'axios';


import {Input} from "@nextui-org/react";
import { isIdentifier } from 'typescript';

const EditFournisseur = ({fournisseur,disabled}) => {
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


    const [selectedKeysDevise, setSelectedKeysDevise] = React.useState(new Set(["text"]));
    const selectedValueDevise = React.useMemo(
      () => Array.from(selectedKeysDevise).join(", ").replaceAll("_", " "),
      [selectedKeysDevise]
    );

    const [selectedKeysPaiement, setSelectedKeysPaiement] = React.useState(new Set(["text"]));
    const selectedValuePaiement = React.useMemo(
      () => Array.from(selectedKeysPaiement).join(", ").replaceAll("_", " "),
      [selectedKeysPaiement]
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
              <h2 className='text-center font-semibold text-xl pb-12'>Edit Fournisseur</h2>

              <form className="flex flex-col gap-4">
              <h2 className=' font-medium text-sm'>Identification</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Reference" placeholder="Enter your reference" value={reference} onValueChange={setReference} type="text"  ref={ReferenceRef}/>
                      <Input isDisabled={disabled}  isRequired label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text" ref={ComptableRef} />
                  </div>
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Fournisseur" placeholder="Enter your name" value={name} onValueChange={setName} type="text" ref={NameRef}/>
                      <Input isDisabled={disabled}   isRequired label="N patente" placeholder="Enter your n patente" value={patente} onValueChange={setPatente} type="number" ref={npatenteRef} />
                  </div>
                  <Input isDisabled={disabled}  isRequired label="Identification fiscal" value={identif} onValueChange={setIdentif} placeholder="Enter your Identification fiscal" type="text" ref={IdentificationRef}/>
                
                </div>
                <h2 className=' font-medium text-sm '>Adresse</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <Input isDisabled={disabled}  isRequired label="Adresse"  value={adresse} onValueChange={setAdresse} placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}  isRequired label="Code postal" value={postale} onValueChange={setPostale} placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isDisabled={disabled}  isRequired label="Pays" value={pays} onValueChange={setPays} placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   isRequired label="Ville" value={ville} onValueChange={setVille} placeholder="Enter your Ville" type="number" ref={villeRef}/>
                </div>
              </div>
              <h2 className=' font-medium text-sm '>Coordonnees</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled} dis isRequired label="Telephone" value={tele} onValueChange={setTele} placeholder="Enter your Telephone" type="text" ref={telephoneRef} />
                    <Input isDisabled={disabled}  isRequired label="Fax" value={fax} onValueChange={setFax} placeholder="Enter your Fax" type="text" ref={faxRef} />
                </div>
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
                              <DropdownItem key="text">Text</DropdownItem>
                              <DropdownItem key="number">Number</DropdownItem>
                              <DropdownItem key="date">Date</DropdownItem>
                              <DropdownItem key="single_date">Single Date</DropdownItem>
                              <DropdownItem key="iteration">Iteration</DropdownItem>
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
                            <DropdownItem key="text">Text</DropdownItem>
                            <DropdownItem key="number">Number</DropdownItem>
                            <DropdownItem key="date">Date</DropdownItem>
                            <DropdownItem key="single_date">Single Date</DropdownItem>
                            <DropdownItem key="iteration">Iteration</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    </div>
                    <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled}  isRequired label="Objectif" value={objectif} onValueChange={setObjectif} placeholder="Enter your Objectif" type="number" ref={objectifRef}/>
                      <Input isDisabled={disabled}   isRequired label="RFA" value={rfa} onValueChange={setRfa} placeholder="Enter your RFA" type="number" ref={RfaRef} />
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
                    <Input isDisabled={disabled}   isRequired label="Delais de Paiement" value={delaispaiement} onValueChange={setDelaispaiement} placeholder="Delais de paiement" type="number" ref={paimentRef} />
                    <Input isDisabled={disabled}   isRequired label="Delais de livraison" value={delaislivraison} onValueChange={setDelaislivraison} placeholder="Delais de livraison" type="number" ref={livraisonRef} />
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

export default EditFournisseur