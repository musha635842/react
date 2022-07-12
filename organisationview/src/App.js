import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import useAuth from "./useAuth";

export default function App() {

  return (

<Router>
  <Routes>
    <Route path="/" element={<StructureOutline />}>
      <Route index element={<IndexPage />} />
      <Route path="/view" element={<RegistryPage />}>
        <Route path="structure" element={<StructureList />}>
          
        </Route>
        <Route path="information" element={<StructureInformation />}></Route>
      </Route>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/contact" element={<ContactInformationPage />} />
     </Route>
 </Routes>
</Router>
  );
}

function StructureOutline() {
  const { authorisationlink, authorisationusername, authorisationusernameroledescription } = useAuth();

 return (
<div>
<div id="div1">
<div className="Upper-navigation" >
<Link to="/"><div className="menuitem1"><img src="/Home.png"></img></div></Link>
<Link to="/view"><div className="menuitem2"><img src="/Market.png"></img></div></Link>
<Link to="/search"><div className="menuitem3"><img src="/Search.png"></img></div></Link>

</div>


  
<div className="Bottom-navigation">
<Link to="/settings"><div className="menuitem4"><img src="/Settings.png"></img></div></Link>
<Link to="/contact"><div className="menuitem5"><img src="/Contact.png"></img></div></Link>
{authorisationlink} 
</div>

</div>


<div id="div2">

<div className="authname">
{authorisationusername}
</div>

<div className="authrole">
{authorisationusernameroledescription}
</div>

</div>



<Outlet />

<div className="SiteInformation" >
© 1992 - 2020 Честный Агент © Все права защищены.
<p> 8 (495) 150-21-12 </p>

</div>
</div>
);
}


function IndexPage() {
  return ( 
    <div>
    </div>
 );
}

function RegistryPage() {
  return (
    <div>
<div id="div3">
<div className="optionsection">
<Link className="optionlink" to="/view/structure"><div className="menuitem7"><img src="/building-4-line 1.png"></img> Организации</div></Link>
</div>
</div>
<Outlet />
    </div>
  )
}

function StructureList() {

  const url = "";
  const key = "";
  const requestoption = "";

 var xhr = new XMLHttpRequest();
 xhr.onload = function() {
   console.log(xhr.responseText);
};

xhr.open("GET", url);
xhr.send();


  return (
    <div>
<div id="div4">
<div className="structurelist">
<table>
    <thead>
        <tr>
            <th colspan="1">Перечень организаций</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> <Link className="optionlink" to="/view/information"><div className="menuitem7"><img src="/building-4-line 1.png"></img> Компания </div></Link> </td>
        </tr>
    </tbody>
</table>

</div>
</div>
    </div>
  )
}

function StructureInformation()  {
  return (
    <div>
    <div id="div5">
    <div className="topnavigation">
     <Link className="topnavigationlink" to="/view/structure"> <img src="/Long.png"></img></Link> К списку юридических лиц 
    </div>
    <table>
    <thead>
        <tr>
            <th colspan="10"> Фирменное наименование <img src="/Edit.png"></img> </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> ОБЩАЯ ИНФОРМАЦИЯ <img src="/Edit.png"></img> </td>
        </tr>
        <tr>
        <td> Полное название: </td>
        <td>  </td>
        </tr>
        <tr>
        <td> Договор: </td>
        <td>  </td>
        </tr>
        <tr>
        <td> Форма: </td>
        <td>  </td>
        </tr>
        <tr>
        <td> Тип: </td>
        <td>  </td>
        </tr>
        <tr>
<p></p>
        </tr>
        <tr>
<p></p>
        </tr>

        <tr>
        <td> КОНТАКТНЫЕ ДАННЫЕ: <img src="/Edit.png"></img> </td>
        </tr>
        <tr>
        <td> ФИО: </td>
        <td>  </td>
        </tr>
        <tr>
        <td> Телефон: </td>
        <td>  </td>
        </tr>
        <tr>
        <td> Эл. почта: </td>
        <td> </td>
        </tr>
        <tr>
<p></p>
        </tr>
        <tr>
<p></p>
        </tr>
        <tr>
        <td> ПРИЛОЖЕННЫЕ ФОТО: </td>
        <td> </td>
        </tr>
<button className="uploadimagebutton"><img src="/Add.png"></img> <div className="uploadimagebuttontext">Добавить изображение </div></button>

    </tbody>
</table>
    </div>
        </div>
  )
}

function SearchPage() {
  return (
    <div>
    </div>
  )
}

function SettingsPage() {
  return (
    <div>

    </div>
  )
}

function ContactInformationPage() {
  return (
    <div>

    </div>
  )
}