"use client"

import React, { useRef } from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import axios from 'axios';


import {Input} from "@nextui-org/react";
import { isIdentifier } from 'typescript';

const Wrapper = () => {
  const [isSelected1, setIsSelected1] = React.useState(false);
  const [isSelected2, setIsSelected2] = React.useState(false);
  const [partirRef, setPartirRef] = React.useState(false);
   
    const ReferenceRef=useRef()
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
        reference:ReferenceRef.current.value,
        comptable:ComptableRef.current.value,
        name:NameRef.current.value,
        npatente:npatenteRef.current.value,
        identification:IdentificationRef.current.value,
        adresse:adresseRef.current.value,
        postale:postalRef.current.value,
        pays:paysRef.current.value,
        ville:villeRef.current.value,
        telephone:telephoneRef.current.value,
        fax:faxRef.current.value,
        modepaiement:10,
        devise:20,
        // modepaiement:selectedValuePaiement,
        // devise:selectedValueDevise,
        // objectif:objectifRef.current.value,
        objectif:3,
        siteWeb:siteWebRef.current.value,
        email:emailRef.current.value,
        rfa:RfaRef.current.value,
        livrsansbc:isSelected1,
        fournissiege:isSelected2,
        partir:partirRef,
        paiment:paimentRef.current.value,
        livration:livraisonRef.current.value
      }
      console.log(payload);
      const res =await axios.post(`http://localhost:8000/fournisseurs/add`,payload)
      console.log(res);
    }
  return (
    <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-[90%] h-fit">
        <CardBody className="overflow-hidden">
              <h2 className='text-center font-semibold text-xl pb-12'>Add Fournisseur</h2>

              <form className="flex flex-col gap-4">
              <h2 className=' font-medium text-sm'>Identification</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isRequired label="Reference" placeholder="Enter your reference" type="text"  ref={ReferenceRef}/>
                      <Input isRequired label="Compte comptable" placeholder="Enter your Compte comptable" type="text" ref={ComptableRef} />
                  </div>
                  <div className="flex justify-between gap-6">
                      <Input isRequired label="Fournisseur" placeholder="Enter your name" type="text" ref={NameRef}/>
                      <Input  isRequired label="N patente" placeholder="Enter your n patente" type="number" ref={npatenteRef} />
                  </div>
                  <Input isRequired label="Identification fiscal" placeholder="Enter your Identification fiscal" type="text" ref={IdentificationRef}/>
                
                </div>
                <h2 className=' font-medium text-sm '>Adresse</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <Input isRequired label="Adresse" placeholder="Enter your Adresse" type="text" ref={adresseRef} />
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Code postal" placeholder="Enter your Code postal" type="text" ref={postalRef} />
                    <Input isRequired label="Pays" placeholder="Enter your pays" type="text" ref={paysRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input  isRequired label="Ville" placeholder="Enter your Ville" type="number" ref={villeRef}/>
                </div>
               
               
              </div>
              <h2 className=' font-medium text-sm '>Coordonnees</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Telephone" placeholder="Enter your Telephone" type="text" ref={telephoneRef} />
                    <Input isRequired label="Fax" placeholder="Enter your Fax" type="text" ref={faxRef} />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Site web" placeholder="Enter your Site web" type="text" ref={siteWebRef} />
                    <Input  isRequired label="Email" placeholder="Enter your Email" type="email" ref={emailRef} />
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
                          <DropdownTrigger>
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
                        <DropdownTrigger>
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
                      <Input isRequired label="Objectif" placeholder="Enter your Objectif" type="text" ref={objectifRef}/>
                      <Input  isRequired label="RFA" placeholder="Enter your RFA" type="number" ref={RfaRef} />
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox isSelected={isSelected1} onValueChange={setIsSelected1} >Peut livrer sans bon de commande</Checkbox>
                      <Checkbox isSelected={isSelected2} onValueChange={setIsSelected2} >Fournisseur siege</Checkbox>
                    </div>

                  </div>
                  <div className='flex flex-col gap-6'>
                    <RadioGroup
                      label="A partir de :"
                      orientation="horizontal"
                      value={partirRef}
                      onValueChange={setPartirRef}
                    >
                      <Radio value="buenos-aires">Date Facture</Radio>
                      <Radio value="sydney">Fin de mois</Radio>
                    </RadioGroup>
                    <Input  isRequired label="Delais de Paiement" placeholder="Delais de paiement" type="number" ref={paimentRef} />
                    <Input  isRequired label="Delais de livraison" placeholder="Delais de livraison" type="number" ref={livraisonRef} />
                  </div>
                </div>
              
              </div>
               <div className='self-end flex gap-6'>
               <Button size="md" color='primary' className='px-16  py-2 ' onClick={save}>
                  Save
                </Button>
               <Button size="md"  className='px-16   py-2 '>
                  Annuler
                </Button>
              
               </div>
              </form>
        </CardBody>
      </Card>
    </div>
    </div>
  )
}

export default Wrapper