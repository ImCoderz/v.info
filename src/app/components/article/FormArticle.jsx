"use client"
import Select from "react-select";

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
      // const res1 =await axios.get(`/utils/modepaiement`)
      // const res2 =await axios.get(`/utils/commercial`)
      // const res3 =await axios.get(`/utils/devise`)

      const res4 =await axios.get(`/utils/taille`)
      const res5 =await axios.get(`/utils/categorietaille`)
      const res6 =await axios.get(`/utils/couleur`)
      const res7 =await axios.get(`/utils/marque`)
      const res8=await axios.get(`/utils/tva`)
      const res9=await axios.get(`/utils/secteur`)
      const res10=await axios.get(`/utils/rayon`)
      const res11=await axios.get(`/utils/srayon`)
      const res12=await axios.get(`/utils/famille`)
      const res13=await axios.get(`/utils/sfamille`)
      const res14=await axios.get(`/utils/segment`)
      const res15=await axios.get(`/utils/activite`)
      const res16=await axios.get(`/utils/saison`)


      // setModepaie(res1.data);
      // setCommercial(res2.data);
      // setDevise(res3.data);
      setTaille(res4.data);
      setCategorietaille(res5.data);
      setCouleur(res6.data);
      setMarque(res7.data);
      setTva(res8.data)
      setSecteur(res9.data)
      setRayon(res10.data)
      setSrayon(res11.data)
      setFamille(res12.data)
      setSfamille(res13.data)
      setSegment(res14.data)
      setActivite(res15.data)
      setSaison(res16.data)
    }
    getModepaie()
  },[])

  const [isLoading, setIsLoading] = React.useState();

  // const [modepaie, setModepaie] = React.useState();
  // const [commercial, setCommercial] = React.useState();
  // const [devise, setDevise] = React.useState();


  const [taille, setTaille] = React.useState();
  const [categorietaille, setCategorietaille] = React.useState();
  const [couleur, setCouleur] = React.useState();
  const [marque, setMarque] = React.useState();
  const [tva, setTva] = React.useState();
  const [secteur, setSecteur] = React.useState();
  const [rayon, setRayon] = React.useState();
  const [srayon, setSrayon] = React.useState();
  const [famille, setFamille] = React.useState();
  const [sfamille, setSfamille] = React.useState();
  const [segment, setSegment] = React.useState();
  const [activite, setActivite] = React.useState();
  const [saison, setSaison] = React.useState();



  const [image, setImage] = React.useState(article?.PHOTO);
  const [reference, setReference] = React.useState(article?.REF_ART);
  const [comptable, setComptable] = React.useState(article?.compte_compt);
  const [designation, setDesignation] = React.useState(article?.ARTICLE);
  const [modele, setModele] = React.useState(article?.MODELE);

 

   


  const [cout, setCout] = React.useState(article?.cout);
  const [cout1, setCout1] = React.useState(article?.cout);
  const [cout2, setCout2] = React.useState(article?.cout);
  const [cout3, setCout3] = React.useState(article?.cout);
  const [txmarge, setTxmarge] = React.useState(article?.TMARGE);
  const [paht, setPaht] = React.useState(article?.PA_HT);
  const [pattc, setPattc] = React.useState(article?.PA_TTC);
  const [pvht, setPvht] = React.useState(article?.PV_HT); 
  const [pvttc, setPvttc] = React.useState(article?.PV_TTC); 
  const [tarif1, setTarif1] = React.useState(article?.tarif1); 
  const [tarif2, setTarif2] = React.useState(article?.tarif1); 
  const [tarif3, setTarif3] = React.useState(article?.tarif1); 
  const [tarif4, setTarif4] = React.useState(article?.tarif1); 
  const [tarif5, setTarif5] = React.useState(article?.tarif1); 
  const [tarif6, setTarif6] = React.useState(article?.tarif1); 
  const [tarif7, setTarif7] = React.useState(article?.tarif1); 
  const [tarif8, setTarif8] = React.useState(article?.tarif1); 
  const [tarif9, setTarif9] = React.useState(article?.tarif1); 
  const [tarif10, setTarif10] = React.useState(article?.tarif1);  
   


  const [pesableinfo, setPesableinfo] = React.useState(article?.PESAGE);
  const [plu, setPlu] = React.useState(article?.PLU);




  const [libre1, setLibre1] = React.useState(article?.ADRESSE1FACT);
  const [libre2, setLibre2] = React.useState(article?.ADRESSE1FACT);
  const [libre3, setLibre3] = React.useState(article?.ADRESSE1FACT);
  const [libre4, setLibre4] = React.useState(article?.ADRESSE1FACT);


  const [iscf1, setIscf1] = React.useState(article?.CF1);
  const [iscf2, setIscf2] = React.useState(article?.CF2);
  const [iscf3, setIscf3] = React.useState(article?.CF3);
  const [iscf4, setIscf4] = React.useState(article?.CF4);
  const [iscf5, setIscf5] = React.useState(article?.CF5);
  const [iscf6, setIscf6] = React.useState(article?.CF6);
  const [iscf7, setIscf7] = React.useState(article?.CF7);
  const [iscf8, setIscf8] = React.useState(article?.CF8);
  const [iscf9, setIscf9] = React.useState(article?.CF9);
  const [iscf10, setIscf10] = React.useState(article?.CF10);
  

   const [isAchat, setIsAchat] = React.useState(article?.ACHAT_BLOQ =="O");
  const [isVente, setIsVente] = React.useState(article?.VENTE_BLOQ);
  const [isTotal, setIsTotal] = React.useState(article?.bloque);

  const [libcaisse, setLibcaisse] = React.useState(article?.LIBCAISSE);
  const [libarabe, setLibarabe] = React.useState(article?.LIBARABE);

   const [datecrea, setDatecrea] = React.useState(article?.DATECREAT?.toString().slice(0,10));
   const [datemodif, setDatemodif] = React.useState(article?.DATEMODIF?.toString().slice(0,10));
   const [dateachat, setDateachat] = React.useState(article?.DATE_PA?.toString().slice(0,10));
   const [datevente, setDatevente] = React.useState(article?.DATE_PV?.toString().slice(0,10));
   const [pamp, setPamp] = React.useState(article?.PAMP);
   const [dernierprixachat, setDernierprixachat] = React.useState(article?.DERPAHT);


   


  const [stockg, setStockg] = React.useState(article?.STOCKG);
  const [colisage, setColisage] = React.useState(article?.COLISAGE);
  const [nbcolisp, setNbcolisp] = React.useState(article?.nbcolis);
  const [facing, setFacing] = React.useState(article?.FACING);
  const [profondeur, setProfondeur] = React.useState(article?.PROFONDEUR);
  const [unite, setUnite] = React.useState(article?.unite);
  const [unitevteclt, setUnitevteclt] = React.useState(article?.PAYS);
  const [isserialise, setisSerialise] = React.useState(article?.serialise);
  

    function getKeyByValue(jsonObject, targetValue) {
      // if(!jsonObject) return null
      for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key) && jsonObject[key] === targetValue) {
              return key;
          }
      }
      return "Select a value";
   }
  
    
    const [selectedKeysTaille, setSelectedKeysTaille] = React.useState(article&&({value:article?.REFTAILLE,label:article?.TAILLE}));
   

    const [selectedKeysCouleur, setSelectedKeysCouleur] = React.useState(article&&({value:article?.REFCOULEUR,label:article?.COULEUR}));
    

    const [selectedKeysCategorietaille, setSelectedKeysCategorietaille] = React.useState(article&&({value:article?.REFCATEG,label:categorietaille?.filter((mode)=>mode.REFCATEG==article?.REFCATEG)[0]}));
   
    
    const [selectedKeysMarque, setSelectedKeysMarque] = React.useState(article&&({value:article?.REF_MARQ,label:marque?.filter((mode)=>mode.REF_MARQ==article?.REF_MARQ)[0]}));
    


    const [selectedKeysSecteur, setSelectedKeysSecteur] = React.useState(article&&({value:article?.ref_dep,label:secteur?.filter((mode)=>mode.ref_dep==article?.ref_dep)[0]}));
    
    
    const [selectedKeysRayon, setSelectedKeysRayon] = React.useState(article&&({value:article?.REF_RAY,label:rayon?.filter((mode)=>mode.REF_RAY==article?.REF_RAY)[0]}));
    
    
    const [selectedKeysSrayon, setSelectedKeysSrayon] = React.useState(article&&({value:article?.REF_SRAY,label:srayon?.filter((mode)=>mode.REF_SRAY==article?.REF_SRAY)[0]}));
    
    
    const [selectedKeysFamille, setSelectedKeysFamille] = React.useState(article&&({value:article?.ref_fam,label:famille?.filter((mode)=>mode.ref_fam==article?.ref_fam)[0]}));
    
    
    const [selectedKeysSfamille, setSelectedKeysSfamille] = React.useState(article&&({value:article?.ref_sfam,label:sfamille?.filter((mode)=>mode.ref_sfam==article?.ref_sfam)[0]}));
    
    
    const [selectedKeysSegment, setSelectedKeysSegment] = React.useState(article&&({value:article?.ref_ssfam,label:segment?.filter((mode)=>mode.ref_ssfam==article?.ref_ssfam)[0]}));
    
    
    const [selectedKeysActivite, setSelectedKeysActivite] = React.useState(article&&({value:article?.REFACTIVITE,label:activite?.filter((mode)=>mode.REFACTIVITE==article?.REFACTIVITE)[0]}));
    
    
    const [selectedKeysSaison, setSelectedKeysSaison] = React.useState(article&&({value:article?.REFSAISON,label:saison?.filter((mode)=>mode.REFSAISON==article?.REFSAISON)[0]}));
    


    const [selectedKeysTva1, setSelectedKeysTva1] = React.useState(article&&({value:article?.TVA1,label:article?.TVA1}));
    
    
    
    const [selectedKeysTva2, setSelectedKeysTva2] = React.useState(article&&({value:article?.TVA2,label:article?.TVA2}));
    
    
  
    const save = async() =>{
      setIsLoading(true)
      const payload={
        PHOTO:image||null,
        REF_ART:reference||null,
        compte_compt:comptable||null,
        ARTICLE:designation||null,
        MODELE:modele||null,
        TAILLE:selectedKeysTaille?.label||null,
        REFTAILLE:selectedKeysTaille?.value||null,
        REFCOULEUR:selectedKeysCouleur?.value||null,
        COULEUR:selectedKeysCouleur?.label||null,
        REFCATEG:selectedKeysCategorietaille?.value||null,
        REF_MARQ:selectedKeysMarque?.value||null,
        cout:+cout||null,
        cout1:+cout1||null,
        cout2:+cout2||null,
        cout3:+cout3||null,
        TMARGE:txmarge||null,
        PA_HT:+paht||null,
        PA_TTC:+pattc||null,
        PV_HT:+pvht||null,
        PV_TTC:+pvttc||null,
        TVA1:+selectedKeysTva1?.value||null,
        TVA2:+selectedKeysTva2?.value||null,
        tarif1:+tarif1||null,
        tarif2:+tarif2||null,
        tarif3:+tarif3||null,
        tarif4:+tarif4||null,
        tarif5:+tarif5||null,
        tarif6:+tarif6||null,
        tarif7:+tarif7||null,
        tarif8:+tarif8||null,
        tarif9:+tarif9||null,
        tarif10:+tarif10||null,
        PESAGE:pesableinfo||null,
        PLU:plu||null,
        ref_dep:selectedKeysSecteur?.value||null,
        REF_RAY:selectedKeysRayon?.value||null,
        REF_SRAY:selectedKeysSrayon?.value||null,
        REF_FAM:selectedKeysFamille?.value||null,
        REF_SFAM:selectedKeysSfamille?.value||null,
        ref_ssfam:selectedKeysSegment?.value||null,
        REFACTIVITE:selectedKeysActivite?.value||null,
        REFSAISON:selectedKeysSaison?.value||null,
        CF1:iscf1||false,
        CF2:iscf2||false,
        CF3:iscf3||false,
        CF4:iscf4||false,
        CF5:iscf5||false,
        CF6:iscf6||false,
        CF7:iscf7||false,
        CF8:iscf8||false,
        CF9:iscf9||false,
        CF10:iscf10||false,
        ACHAT_BLOQ:isAchat?"O":"N",
        VENTE_BLOQ:isVente?"O":"N",
        bloque:isTotal?"O":"N",
        LIBCAISSE:libcaisse||null,
        LIBARABE:libarabe||null,
        DATECREAT:datecrea||null,
        DATEMODIF:datemodif||null,
        DATE_PA:dateachat||null,
        DATE_PV:datevente||null,
        PAMP:pamp||null,
        DERPAHT:dernierprixachat||null,
        STOCKG:stockg||null,
        COLISAGE:colisage||null,
        nbcolis:nbcolisp||null,
        FACING:facing||null,
        PROFONDEUR:profondeur||null,
        unite:unite||null,
        unitevteclt:unitevteclt||null,
        serialise:isserialise||false,
      }
      console.log(payload);
      if(article){
        try{
          console.log("putttttt");
          const res =await axios.put(`/article/edit/${article.REF_ART}`,payload)
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
          const res =await axios.post(`/article/add/`,payload)
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
              <h2 className='text-center font-semibold text-xl pb-12'>Form Article</h2>

              <form className="flex flex-col gap-4" onSubmit={save}>
              <h2 className=' font-medium text-sm'>Picture</h2>

                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                    <Input isDisabled={disabled}   label="Image" placeholder="Choose an image" value={image} onValueChange={setImage} type="text"  />
                </div>
              <h2 className=' font-medium text-sm'>Identification</h2>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <div className="flex justify-between gap-6">
                      <Input isDisabled={disabled} isRequired   label="Code article" placeholder="Enter your Code article" value={reference} onValueChange={setReference} type="text"  />
                      <Input isDisabled={disabled} isReauired   label="Compte comptable" placeholder="Enter your Compte comptable" value={comptable} onValueChange={setComptable} type="text"/>
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                  <Input isDisabled={disabled} isRequired   label="Designation" placeholder="Enter your Designation" value={designation} onValueChange={setDesignation} type="text" />
                    <Input isDisabled={disabled}     label="Modele" placeholder="Enter your Modele" value={modele} onValueChange={setModele} type="number"  />
                  </div>
                    
                  <div className='flex flex-col gap-5'>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Taille             :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={taille?.map((tail)=>(
                                {value:tail.REFTAILLE,label:tail.TAILLE}
                              ))}
                              placeholder="Select a taille"
                              value={selectedKeysTaille}
                              onChange={(data)=>setSelectedKeysTaille(data)}
                              isSearchable={true}
                            />
                          </div>
                      </div>


                      <div className="flex gap-3 items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Categorie taille   :</pre></h3>
                      <div className="dropdown-container w-[300px]">
                            <Select
                              options={categorietaille?.map((cat)=>(
                                {value:cat.REFCATEG,label:cat.categorietaille}
                              ))}
                              placeholder="Select a categorie taille"
                              value={selectedKeysCategorietaille}
                              onChange={(data)=>setSelectedKeysCategorietaille(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                      <div className="flex gap-3 items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Couleur            :</pre></h3>
                      <div className="dropdown-container w-[300px]">
                            <Select
                              options={couleur?.map((coul)=>(
                                {value:coul.Refcouleur,label:coul.COULEUR}
                              ))}
                              placeholder="Select a couleur"
                              value={selectedKeysCouleur}
                              onChange={(data)=>setSelectedKeysCouleur(data)}
                              isSearchable={true}
                            />
                          </div>
                      
                   
                    </div>
                      <div className="flex gap-3  items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Marque             :</pre></h3>
                      <div className="dropdown-container w-[300px]">
                            <Select
                              options={marque?.map((marq)=>(
                                {value:marq.REF_MARQ,label:marq.MARQUE}
                              ))}
                              placeholder="Select a taille"
                              value={selectedKeysMarque}
                              onChange={(data)=>setSelectedKeysMarque(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                </div>
                </div>
                <h2 className=' font-medium text-sm text-center '>Tarifs</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <h2 className=' font-medium text-sm'>Prix</h2>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Cout"  value={cout} onValueChange={setCout} placeholder="Enter your Cout" type="text"  />
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Tva1             :</pre></h3>
                      <div className="dropdown-container w-[300px]">
                            <Select
                              options={tva?.map((tv)=>(
                                {value:tv.TVA1,label:tv.TVA1}
                              ))}
                              placeholder="Select tva1"
                              value={selectedKeysTva1}
                              onChange={(data)=>setSelectedKeysTva1(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                    <Input isDisabled={disabled}   label="Prix achat(HT)" value={paht} onValueChange={setPaht} placeholder="Enter your pays" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Adresse Livraison 2"  value={pvht} onValueChange={setPvht} placeholder="Enter your Adresse" type="text" />
                      <div className="flex gap-3 justify-center items-center px-2">
                      <h3 className='font-medium text-sm '><pre>Tva2             :</pre></h3>
                      <div className="dropdown-container w-[300px]">
                            <Select
                              options={tva?.map((tv)=>(
                                {value:tv.TVA1,label:tv.TVA1}
                              ))}
                              placeholder="Select tva2"
                              value={selectedKeysTva2}
                              onChange={(data)=>setSelectedKeysTva2(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                    <Input isDisabled={disabled}   label="Tx marge" value={txmarge} onValueChange={setTxmarge} placeholder="Enter your pays" type="text" />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Adresse Facturation 1"  value={pattc} onValueChange={setPattc} placeholder="Enter your Adresse" type="text"/>
                    <Input isDisabled={disabled}   label="Adresse Facturation 2"  value={pvttc} onValueChange={setPvttc} placeholder="Enter your Adresse" type="text" />
                </div>
                </div>
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <h2 className=' font-medium text-sm'>Tarifs</h2>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Tarif1" value={tarif1} onValueChange={setTarif1} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Tarif2" value={tarif2} onValueChange={setTarif2} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Tarif3" value={tarif3} onValueChange={setTarif3} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Tarif4" value={tarif4} onValueChange={setTarif4} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Tarif5" value={tarif5} onValueChange={setTarif5} placeholder="Enter your pays" type="text"  />
                    
                    
                </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="Tarif6" value={tarif6} onValueChange={setTarif6} placeholder="Enter your pays" type="text"  />
                  <Input isDisabled={disabled}   label="Tarif7" value={tarif7} onValueChange={setTarif7} placeholder="Enter your pays" type="text"  />
                  <Input isDisabled={disabled}   label="Tarif8" value={tarif8} onValueChange={setTarif8} placeholder="Enter your pays" type="text"  />
                  <Input isDisabled={disabled}   label="Tarif9" value={tarif9} onValueChange={setTarif9} placeholder="Enter your pays" type="text"  />
                  <Input isDisabled={disabled}   label="Tarif10" value={tarif10} onValueChange={setTarif10} placeholder="Enter your pays" type="text"  />
                </div>
                </div>
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <h2 className=' font-medium text-sm'>Cout de transfert</h2>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Cout1" value={cout1} onValueChange={setCout1} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Cout2" value={cout2} onValueChange={setCout2} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Cout3" value={cout3} onValueChange={setCout3} placeholder="Enter your pays" type="text"  />
                    
                </div>
                </div>
              </div>
              <h2 className=' font-medium text-sm text-center'>Pesage</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                  <RadioGroup
                      label="Pesage :"
                      orientation="horizontal"
                      value={pesableinfo}
                      onValueChange={setPesableinfo}
                      isDisabled={disabled}
                    >
                      <Radio value="N"> Non Pesable</Radio>
                      <Radio value="P">Pesable au poids</Radio>
                      <Radio value="U">Pesable a l'unite</Radio>
                    </RadioGroup>
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="PLU" value={plu} onValueChange={setPlu} placeholder="Enter your pays" type="text"  />
                </div>
              </div>
              
              <h2 className=' font-medium text-sm text-center '>Classement</h2>

              
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
              <h2 className=' font-medium text-sm '>Parametres</h2>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Secteur     :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={secteur?.map((sec)=>(
                                {value:sec.ref_dep,label:sec.departem}
                              ))}
                              placeholder="Select a secteur"
                              value={selectedKeysSecteur}
                              onChange={(data)=>setSelectedKeysSecteur(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Rayon       :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={rayon?.map((ray)=>(
                                {value:ray.REF_RAY,label:ray.RAYON}
                              ))}
                              placeholder="Select a rayon"
                              value={selectedKeysRayon}
                              onChange={(data)=>setSelectedKeysRayon(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Sous rayon  :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={srayon?.map((sray)=>(
                                {value:sray.REF_SRAY,label:sray.SRAYON}
                              ))}
                              placeholder="Select srayon"
                              value={selectedKeysSrayon}
                              onChange={(data)=>setSelectedKeysSrayon(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Famille     :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={famille?.map((famil)=>(
                                {value:famil.ref_fam,label:famil.FAMILLE}
                              ))}
                              placeholder="Select srayon"
                              value={selectedKeysFamille}
                              onChange={(data)=>setSelectedKeysFamille(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Sousfamille :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={sfamille?.map((sfamil)=>(
                                {value:sfamil.ref_sfam,label:sfamil.SFAMILLE}
                              ))}
                              placeholder="Select sous famille"
                              value={selectedKeysSfamille}
                              onChange={(data)=>setSelectedKeysSfamille(data)}
                              isSearchable={true}
                            />
                          </div>
                      </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Segment     :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={segment?.map((seg)=>(
                                {value:seg.ref_ssfam,label:seg.SSFAMILLE}
                              ))}
                              placeholder="Select srayon"
                              value={selectedKeysSegment}
                              onChange={(data)=>setSelectedKeysSegment(data)}
                              isSearchable={true}
                            />
                          </div>
                      </div>

                
              </div>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
              <h2 className=' font-medium text-sm '>Autre parametres</h2>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Activite    :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={activite?.map((activ)=>(
                                {value:activ.REFACTIVITE,label:activ.ACTIVITE}
                              ))}
                              placeholder="Select activite"
                              value={selectedKeysActivite}
                              onChange={(data)=>setSelectedKeysActivite(data)}
                              isSearchable={true}
                            />
                          </div>
                      </div>
                      <div className="flex gap-3 items-center px-2">
                        <h3 className='font-medium text-sm '><pre>Saison      :</pre></h3>
                        <div className="dropdown-container w-[300px]">
                            <Select
                              options={saison?.map((sais)=>(
                                {value:sais.REFSAISON,label:sais.SAISON}
                              ))}
                              placeholder="Select saison"
                              value={selectedKeysSaison}
                              onChange={(data)=>setSelectedKeysSaison(data)}
                              isSearchable={true}
                            />
                          </div>
                    </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="Libre1" value={libre1} onValueChange={setLibre1} placeholder="Enter a value" type="text" />
                  <Input isDisabled={disabled}   label="Libre2" value={libre2} onValueChange={setLibre2} placeholder="Enter a value" type="text" />
                  
                </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="Libre3" value={libre3} onValueChange={setLibre3} placeholder="Enter a value" type="text" />
                  <Input isDisabled={disabled}   label="Libre4" value={libre4} onValueChange={setLibre4} placeholder="Enter a value" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                    <h2 className=' font-medium text-sm '>Caisses familles</h2>
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={iscf1} onValueChange={setIscf1} >Caisse fam 1</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf2} onValueChange={setIscf2} >Caisse fam 2</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf3} onValueChange={setIscf3} >Caisse fam 3</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf4} onValueChange={setIscf4} >Caisse fam 4</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf5} onValueChange={setIscf5} >Caisse fam 5</Checkbox>
                    </div>
                    <div className="flex justify-between gap-6">
                      <Checkbox isDisabled={disabled} isSelected={iscf6} onValueChange={setIscf6} >Caisse fam 6</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf7} onValueChange={setIscf7} >Caisse fam 7</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf8} onValueChange={setIscf8} >Caisse fam 8</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf9} onValueChange={setIscf9} >Caisse fam 9</Checkbox>
                      <Checkbox isDisabled={disabled} isSelected={iscf10} onValueChange={setIscf10} >Caisse fam 10</Checkbox>
                    </div>
              </div>
              </div>
            
              <h2 className=' font-medium text-sm text-center '>Autre Infos</h2>

              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <h2 className=' font-medium text-sm '>Autre Libelles</h2>
                <div className="flex justify-between gap-6">

                  <Input isDisabled={disabled}   label="Libelle caisse" value={libcaisse} onValueChange={setLibcaisse} placeholder="Enter a value" type="text" />
                  <Input isDisabled={disabled}   label="Libelle arabe" value={libarabe} onValueChange={setLibarabe} placeholder="Enter a value" type="text" />
                
                </div>
                </div>
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                  <h2 className=' font-medium text-sm '>Blocage</h2>
                  <div className="flex justify-between gap-6">
                    <Checkbox isDisabled={disabled} isSelected={isAchat} onValueChange={setIsAchat} >A l achat</Checkbox>
                    <Checkbox isDisabled={disabled} isSelected={isVente} onValueChange={setIsVente} >A la vente </Checkbox>
                    <Checkbox isDisabled={disabled} isSelected={isTotal} onValueChange={setIsTotal} >Totale</Checkbox>
                </div>
                </div>
                <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <h2 className=' font-medium text-sm '>Autre Infos</h2>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="Date creation" value={datecrea} onValueChange={setDatecrea} placeholder="Enter a value" type="date" />
                  <Input isDisabled={disabled}   label="Date modification" value={datemodif} onValueChange={setDatemodif} placeholder="Enter a value" type="date" />
                  <Input isDisabled={disabled}   label="Date achat" value={dateachat} onValueChange={setDateachat} placeholder="Enter a value" type="date" />

                </div>
                <div className="flex justify-between gap-6">
                  <Input isDisabled={disabled}   label="Date vente" value={datevente} onValueChange={setDatevente} placeholder="Enter a value" type="date" />
                  <Input isDisabled={disabled}   label="Pamp" value={pamp} onValueChange={setPamp} placeholder="Enter a value" type="text" />
                  <Input isDisabled={disabled}   label="Dernier prix achat" value={dernierprixachat} onValueChange={setDernierprixachat} placeholder="Enter a value" type="text" />
                </div>
              </div>
              </div>
              <div className="flex flex-col gap-4 h-fit border p-2 py-5 border-slate-400 rounded-xl">
                <div className="flex justify-between gap-6">
                <Input isDisabled={disabled}   label="Stock global" value={stockg} onValueChange={setStockg} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Colisage" value={colisage} onValueChange={setColisage} placeholder="Enter your Secteur" type="text"  />
                    <Input isDisabled={disabled}   label="Nbcolis/palette" value={nbcolisp} onValueChange={setNbcolisp} placeholder="Enter your pays" type="number"  />
                    <Input isDisabled={disabled}   label="Facing" value={facing} onValueChange={setFacing} placeholder="Enter your Secteur" type="text"  />
                </div>
                <div className="flex justify-between gap-6">
                    <Input isDisabled={disabled}   label="Profondeur" value={profondeur} onValueChange={setProfondeur} placeholder="Enter your pays" type="text"  />
                    <Input isDisabled={disabled}   label="Unite" value={unite} onValueChange={setUnite} placeholder="Enter your Secteur" type="text"  />
                    <Input isDisabled={disabled}   label="Inite vte clt :" value={unitevteclt} onValueChange={setUnitevteclt} placeholder="Enter your pays" type="text"  />
                    <Checkbox isDisabled={disabled} isSelected={isserialise} onValueChange={setisSerialise} >Serialise</Checkbox>
                </div>
              </div>
               <div className='self-end flex gap-6'>
                {
                  !disabled&&(
                    <>
                    <Button size="md" type="submit" color='primary' className='px-16  py-2 ' isLoading={isLoading} >
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