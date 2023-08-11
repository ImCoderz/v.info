"use client"

import React from 'react'
import {Tabs, Tab, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";



import {Input} from "@nextui-org/react";

const FormFournisseur = ({fournisseur}) => {
    const [selected, setSelected] = React.useState("identification");

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
  return (
    <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-full items-center">
      <Card className="max-w-full w-[90%] h-fit">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="identification" title="Identification">
              <form className="flex flex-col gap-4">
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Reference" value={fournisseur?.CODE_FRS} disabled placeholder="Enter your reference" type="text" />
                    <Input isRequired label="Compte comptable" value={fournisseur?.compte_compt} disabled placeholder="Enter your Compte comptable" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Fournisseur" value={fournisseur?.FOURNISSEUR} disabled placeholder="Enter your name" type="text" />
                    <Input  isRequired label="N patente" value={fournisseur?.patente} disabled placeholder="Enter your n patente" type="number" />
                </div>
                <Input isRequired label="Identification fiscal" placeholder="Enter your Identification fiscal" type="text" />

                <div className='self-end flex gap-1' >
                    <Button isDisabled={true} size="sm" variant="flat" onPress={()=>setSelected("adresse")}>
                        Previous
                    </Button>
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("adresse")}>
                        Next
                    </Button>
                </div>
               
              </form>
            </Tab>
            <Tab key="adresse" title="Adresse">
              <form className="flex flex-col gap-4 h-fit">
                <Input isRequired label="Adresse" placeholder="Enter your Adresse" type="text" />
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Code postal" placeholder="Enter your Code postal" type="text" />
                    <Input isRequired label="Pays" placeholder="Enter your pays" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input  isRequired label="Ville" placeholder="Enter your Ville" type="number" />
                </div>
                <div className='self-end flex gap-1' >
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("identification")}>
                        Previous
                    </Button>
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("coordonnees")}>
                        Next
                    </Button>
                </div>
               
              </form>
            </Tab>
            
            <Tab key="coordonnees" title="Coordonnees">
              <form className="flex flex-col gap-4 h-fit">
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Telephone" placeholder="Enter your Telephone" type="text" />
                    <Input isRequired label="Fax" placeholder="Enter your Fax" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isRequired label="Site web" placeholder="Enter your Site web" type="text" />
                    <Input  isRequired label="Email" placeholder="Enter your Email" type="email" />
                </div>

                <div className='self-end flex gap-1' >
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("adresse")}>
                        Previous
                    </Button>
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("autre")}>
                        Next
                    </Button>
                </div>
              </form>
            </Tab>
            <Tab key="autre" title="Autre">
              <form className="flex flex-col gap-4 h-[300px]">
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
                      <Input isRequired label="Objectif" placeholder="Enter your Objectif" type="text" />
                      <Input  isRequired label="RFA" placeholder="Enter your RFA" type="number" />
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox defaultSelected>Peut livrer sans bon de commande</Checkbox>
                      <Checkbox defaultSelected>Fournisseur siege</Checkbox>
                    </div>

                  </div>
                  <div className='flex flex-col gap-6'>
                    <RadioGroup
                      label="A partir de :"
                      orientation="horizontal"
                    >
                      <Radio value="buenos-aires">Date Facture</Radio>
                      <Radio value="sydney">Fin de mois</Radio>
                    </RadioGroup>
                    <Input  isRequired label="Delais de Paiement" placeholder="Delais de paiement" type="number" />
                    <Input  isRequired label="Delais de livraison" placeholder="Delais de livraison" type="number" />
                  </div>
                </div>
                <div className='self-end flex gap-1' >
                    <Button isDisabled={false} size="sm" variant="flat" onPress={()=>setSelected("coordonnees")}>
                        Previous
                    </Button>
                    <Button isDisabled={true} size="sm" variant="flat" onPress={()=>setSelected("coordonnees")}>
                        Next
                    </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
    </div>
  )
}

export default FormFournisseur