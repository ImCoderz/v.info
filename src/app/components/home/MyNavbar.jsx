"use client"
import React from "react";
import {  Navbar,   NavbarBrand,Dropdown,DropdownItem , Avatar,DropdownTrigger,DropdownMenu,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import {Link, Button} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import {signOut } from "next-auth/react"
import {useSession} from "next-auth/react"
import {AcmeLogo} from "./AcmeLogo.jsx";


export default function MyNavbar() {
  const {data:session}=useSession()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const items = [
    "Fichier",
    "Achat",
    "Vente",
  ];
  const itemsComponents={
    "Fichier":[
        "Fournisseur",
        "Client",
        "Article"
    ],
    "Achat":[
        "Commande",
        "Livraison",
        "Facture"
    ],
    "Vente":[
        "Devis",
        "Commande vente",
        "Livraison"
    ],
  }

  return (
    <nav>
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // className={`${!session&&("hidden")}`}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">V.INFO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex hidden pr-3" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">V.INFO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            items.map((item,index)=>(
                <Dropdown key={`${item}-${index}`}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            endContent={icons.chevron}
                            radius="sm"
                            variant="light"
                            >
                            {item}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                    {
                        itemsComponents[item]?.map((detail,index)=>(
                          <DropdownItem
                              key={`${detail}-${index}`}
                              description="Just a Description"
                              startContent={icons.scale}
                            >
                            <Link href={`/${detail.toLowerCase()}`}>
                                  {detail}
                            </Link>
                            </DropdownItem>
                        ))
                    }
                   
                </DropdownMenu>
              </Dropdown>
            ))
        }
        </NavbarContent>


      
<NavbarContent justify="end">
        <Dropdown placement="bottom-end">
          <NavbarItem>
            <DropdownTrigger>
              <Avatar
                isBordered
                as={Link}
                href="#"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">test@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
           
            <DropdownItem key="configurations">Test</DropdownItem>
            <DropdownItem key="help_and_feedback">Test</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={()=>signOut()} >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>




















      <NavbarMenu>
      {
            items.map((item,index)=>(
                <Dropdown key={`${item}-${index}`} placement="right-start">
                    <NavbarMenuItem>
                        <DropdownTrigger>
                            <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            endContent={icons.chevron}
                            radius="sm"
                            variant="light"
                            >
                            {item}
                            </Button>
                        </DropdownTrigger>
                    </NavbarMenuItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                    {
                        itemsComponents[item]?.map((detail,index)=>(
                            <DropdownItem
                            key={`${detail}-${index}`}
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                          >
                             {detail}
                            </DropdownItem>
                        ))
                    }
                   
                </DropdownMenu>
              </Dropdown>
            ))
        }
      </NavbarMenu>
    </Navbar>
  </nav>
  )
}
