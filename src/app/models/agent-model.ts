export class AgentModel {
    idAgent: number;
    idClient: number;
    idDept: number;
    codeAgent: string;
    tmpCodeClient?: any;
    tmpOriNom?: any;
    nom: string;
    prenom: string;
    titre: string;
    sexe: string;
    tel: string;
    ext: string;
    fax: string;
    cell: string;
    pager: string;
    residence: string;
    email: string;
    email2: string;
    langue: string;
    flagActif: boolean;
    flagContact: boolean;
    flagEtiquette: boolean;
    flagCarteNoel: boolean;
    flagPub: boolean;
    flagAddZterm: boolean;
    flagAsuivre: boolean;
    flagVisible: boolean;
    flagVoirLdp: boolean;
    typeCc: string;
    initialesZt: string;
    dateDernPub: Date;
    dateDernVisite: Date;
    remarque: string;
    dateIn: Date;
    flagWebguru: boolean;
    flagLoginHolding: boolean;
    flagSuperviseur: boolean;
    flagHideWebdossier: boolean;
    flagCriminelCanada: boolean;
    pubGuid: string;
    cdcNom: string;
    cdcType: string;
    cdcNo: string;
    cdcExpMo: string;
    cdcExpAn: string;
    cdcCcid: string;
    idTddgrp: number;
    flagRoute: boolean;
}