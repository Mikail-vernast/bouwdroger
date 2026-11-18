import { CONTACT } from "@/lib/site";

/**
 * De Franse tekst van de algemene voorwaarden: een getrouwe vertaling van de
 * Nederlandse in `AlgemeneVoorwaardenPage.tsx`, artikel voor artikel en kop
 * voor kop. Niets toegevoegd, niets geschrapt — ook de schikking dat bij
 * tegenstrijdigheid de Nederlandse tekst leidend is (art. 2) staat er.
 *
 * Staat in een eigen bestand omdat het samen met de Nederlandse tekst ruim
 * 900 regels juridische JSX zou zijn. Wijzig je de Nederlandse tekst, pas deze
 * dan mee aan en laat ze door een jurist nalezen.
 */
const VoorwaardenFr = () => (
  <>
    {/* ================= LEGAL ================= */}
    <section className="legal">
      <div className="wrap">
        <nav className="lnav" aria-label="Articles">
          <div className="lt">Tous les articles</div>
          <a href="#art1"><i>Art. 1</i> Définitions</a>
          <a href="#art2"><i>Art. 2</i> Validité et application</a>
          <a href="#art3"><i>Art. 3</i> Formation du contrat</a>
          <a href="#art4"><i>Art. 4</i> Composition et obligations</a>
          <a href="#art4a"><i>Art. 4A</i> Séchage de chantier sur mesure</a>
          <a href="#art5"><i>Art. 5</i> Période de location et fin</a>
          <a href="#art6"><i>Art. 6</i> Livraison et enlèvement</a>
          <a href="#art7"><i>Art. 7</i> Inspection et défauts</a>
          <a href="#art8"><i>Art. 8</i> Restitution et risque</a>
          <a href="#art9"><i>Art. 9</i> Directives pour le locataire</a>
          <a href="#art10"><i>Art. 10</i> Tarification et modifications</a>
          <a href="#art11"><i>Art. 11</i> Dommages, perte et responsabilité</a>
          <a href="#art12"><i>Art. 12</i> Transport</a>
          <a href="#art13"><i>Art. 13</i> Responsabilité de Vernast</a>
          <a href="#art14"><i>Art. 14</i> Réservation et annulation</a>
          <a href="#art15"><i>Art. 15</i> Facturation et paiement</a>
          <a href="#art16"><i>Art. 16</i> Force majeure</a>
          <a href="#art17"><i>Art. 17</i> Garantie locative</a>
          <a href="#art18"><i>Art. 18</i> Informations et droits de PI</a>
          <a href="#art19"><i>Art. 19</i> Assurances et couverture des risques</a>
          <a href="#art20"><i>Art. 20</i> Politique de confidentialité</a>
          <a href="#art21"><i>Art. 21</i> Dispositions finales et juridiction</a>
        </nav>

        <div className="lcol">
          <p className="meta">Dernière mise à jour : août 2026</p>

          <article id="art1">
            <h2><em>Définitions</em>Article 1 – Définitions</h2>
            <p>Dans les présentes Conditions générales de location de Vernast, les termes suivants, écrits avec une majuscule, ont la signification indiquée ci-dessous :</p>
            <dl>
              <dt>Offre</dt><dd>Une proposition de Vernast en vue de la conclusion d'un Contrat, dont il ressort que Vernast entend être liée après acceptation.</dd>
              <dt>RGPD</dt><dd>Le Règlement général sur la protection des données, tel qu'adopté par l'UE dans le Règlement (UE) 2016/679.</dd>
              <dt>Annexes</dt><dd>Les conditions complémentaires spécifiques applicables à certaines catégories de location au sein de Vernast.</dd>
              <dt>Vernast</dt><dd>La personne morale avec laquelle le Contrat est conclu, à savoir VRNST.</dd>
              <dt>Valeur actuelle</dt><dd>La valeur à neuf diminuée de l'amortissement pour vétusté ou usure.</dd>
              <dt>Défauts</dt><dd>Les défectuosités du Matériel loué, imputables à Vernast, qui existaient déjà avant la livraison au Locataire et qui affectent son fonctionnement.</dd>
              <dt>Informations</dt><dd>Toute la documentation, telle que les manuels et les instructions, fournie par Vernast ou disponible sur le site web.</dd>
              <dt>Locataire</dt><dd>Toute personne physique ou morale qui conclut un Contrat avec Vernast, y compris ses représentants.</dd>
              <dt>Matériel loué</dt><dd>Tous les biens proposés à la location par Vernast, y compris les accessoires et les pièces de rechange.</dd>
              <dt>Devis</dt><dd>Une proposition écrite de Vernast au Locataire en vue de la conclusion d'un Contrat.</dd>
              <dt>Montant total</dt><dd>Le montant intégral dû par le Locataire en vertu du Contrat.</dd>
              <dt>Contrat</dt><dd>L'accord contractuel entre Vernast et le Locataire, auquel les présentes conditions s'appliquent.</dd>
              <dt>Parties</dt><dd>Vernast et le Locataire ensemble.</dd>
              <dt>Par écrit</dt><dd>Sous forme physique ou électronique par e-mail, à condition d'être envoyé par des représentants habilités de Vernast ou (selon le contexte) du Locataire.</dd>
              <dt>Conditions de location</dt><dd>Les présentes Conditions générales de Vernast.</dd>
              <dt>Jour ouvrable</dt><dd>Du lundi au vendredi de 07h00 à 21h00, et le samedi de 09h00 à 13h00.</dd>
            </dl>
          </article>

          <article id="art2">
            <h2><em>Article 2</em>Validité et Application</h2>
            <h3>Application générale</h3>
            <p>Les présentes Conditions de location s'appliquent à toute Offre, tout Devis et tout Contrat entre les Parties. Cela comprend les renouvellements implicites ou explicites, les commandes ultérieures ou les contrats répétés, sauf si les Parties en ont convenu autrement Par écrit.</p>
            <h3>Application des Annexes</h3>
            <p>En cas de conditions de location spécifiques émanant de certains départements de Vernast, comme pour la location de Matériel loué spécialisé, les Annexes pertinentes s'appliquent en plus des Conditions de location. Par exemple, lors de la location d'un article déterminé, l'Annexe applicable est valable en plus des Conditions de location standard.</p>
            <h3>Modifications et ajouts</h3>
            <p>Les éventuelles dérogations ou ajouts au Contrat, aux Conditions de location ou aux Annexes ne sont valables que s'ils sont expressément confirmés Par écrit par Vernast. Si Vernast accepte de telles dérogations, cela n'a aucune incidence sur les contrats futurs.</p>
            <h3>Renonciation aux conditions du Locataire</h3>
            <p>Le Locataire reconnaît que ses propres conditions générales ne s'appliquent pas au Contrat. Les références aux conditions générales du Locataire sont considérées comme des références standard sans conséquences juridiques dans la relation entre les Parties.</p>
            <h3>Primauté du Contrat</h3>
            <p>En cas de contradiction entre les Conditions de location et/ou les Annexes et le Contrat, le contenu du Contrat prévaut.</p>
            <h3>Versions linguistiques</h3>
            <p>En cas de contradiction entre la version néerlandaise des Conditions de location et/ou des Annexes et leurs traductions, le texte néerlandais prévaut.</p>
            <h3>Droit de modification de Vernast</h3>
            <p>Vernast se réserve le droit de modifier ou de compléter les présentes Conditions de location et Annexes. Les modifications s'appliquent également aux Contrats en cours, à condition d'avoir été convenues Par écrit entre les Parties ou si le Locataire n'a formulé aucune objection dans les 30 jours suivant la notification Par écrit des modifications.</p>
          </article>

          <article id="art3">
            <h2><em>Article 3</em>Formation du Contrat</h2>
            <h3>Propositions du Locataire</h3>
            <p>Les demandes de location du Locataire sont considérées comme des propositions contraignantes en vue de la conclusion d'un Contrat. Un Contrat est réputé conclu par la confirmation Par écrit de Vernast de la demande de location du Locataire.</p>
            <h3>Acceptation d'un Devis ou d'une Offre</h3>
            <p>Un Contrat naît également lorsque le Locataire accepte un Devis ou une Offre de Vernast, sauf si Vernast retire le Devis ou l'Offre dans un délai maximal de trois Jours ouvrables après l'acceptation par le Locataire.</p>
            <h3>Signature électronique en agence</h3>
            <p>Les Contrats conclus dans les agences de Vernast sont signés électroniquement. Le Contrat prend effet dès que le Locataire le signe électroniquement. Préalablement à la signature, le Locataire peut consulter, télécharger et enregistrer les Conditions de location et les éventuels plans complémentaires via le site web de Vernast. Le Contrat signé électroniquement, y compris les Conditions de location et les éventuels documents complémentaires, est envoyé immédiatement après la signature à l'adresse e-mail communiquée par le Locataire.</p>
            <h3>Début de l'exécution</h3>
            <p>Nonobstant ce qui précède, un Contrat est toujours réputé conclu au moment où Vernast commence l'exécution du Contrat.</p>
          </article>

          <article id="art4">
            <h2><em>Article 4</em>Composition et Obligations du Contrat</h2>
            <h3>Définition du Contrat</h3>
            <p>Le contenu et la portée des obligations de Vernast sont déterminés par le Devis accepté, le Contrat lui-même, les Conditions de location, les Annexes pertinentes et tous les accords consignés Par écrit. En cas de divergence entre le Devis et le Contrat, le Contrat prévaut.</p>
            <h3>Écarts admissibles</h3>
            <p>Vernast peut apporter au Contrat de petites modifications non essentielles, pour autant que ces modifications ne portent pas sur les exigences essentielles communiquées Par écrit par le Locataire avant la conclusion du Contrat. Ces modifications ne peuvent pas changer substantiellement la prestation de Vernast. Cela comprend la mise à disposition d'un Matériel loué comparable en termes de qualité et de performances.</p>
            <h3>Droit de résolution du Locataire</h3>
            <p>Si le Locataire peut démontrer que le Matériel loué s'écarte de manière significative du Contrat ou des Informations fournies par Vernast, de sorte que l'exécution serait déraisonnable, le Locataire a le droit de résoudre le Contrat. Dans ce cas, Vernast n'est toutefois tenue à aucune forme d'indemnisation.</p>
            <h3>Recours à des tiers par Vernast</h3>
            <p>Vernast se réserve le droit, pour l'exécution de ses obligations découlant du Contrat, de louer du Matériel loué similaire ou du personnel auprès d'un tiers.</p>
            <h3>Frais de redémarrage lors des visites de service</h3>
            <p>Si Vernast doit se rendre sur place pour redémarrer l'installation, des frais sont facturés en fonction de l'ampleur et de la complexité de la tâche, y compris les éventuels frais de déplacement, avec un minimum de 125,00 euros HTVA. Ces frais s'appliquent lorsque la nécessité du redémarrage est causée par des circonstances étrangères au fonctionnement ou à la qualité du matériel loué, telles que des actes ou des négligences du Locataire ou des facteurs externes. Ces frais sont facturés séparément et sont indépendants des frais de location standard.</p>
          </article>

          <article id="art4a">
            <h2><em>Article 4A</em>Service de Séchage de chantier sur Mesure</h2>
            <h3>Réservation et inspection sur place</h3>
            <p>Lors de la réservation de notre service de séchage de chantier, Vernast garantit une approche experte et sur mesure. Ce processus commence par une inspection détaillée sur place par l'un de nos experts qualifiés. Sur la base de cette inspection, un avis personnalisé est émis pour vos besoins spécifiques en matière de séchage de chantier.</p>
            <h3>Installation après avis</h3>
            <p>Nous nous présentons toujours sur place entièrement équipés afin de procéder, immédiatement après avoir donné notre avis, à l'installation du matériel de location nécessaire. Cela garantit un service efficace et rapide. Toutefois, si le client décide, après avoir reçu notre avis et établi le bon de commande, de convenir d'un autre moment pour l'installation, nous pouvons offrir cette flexibilité.</p>
            <h3>Inspection du bâtiment et procédure d'avis</h3>
            <p>Si, après avoir reçu notre avis sur mesure, vous décidez de ne pas poursuivre le séchage de chantier proposé, certains frais sont dus. Il s'agit des frais de transport et des éventuels frais liés à l'inspection. Ces frais s'appliquent, sauf convention contraire dans votre contrat. Cette disposition nous permet d'offrir en permanence à nos clients un service professionnel et de haute qualité.</p>
          </article>

          <article id="art5">
            <h2><em>Article 5</em>Période de Location et Fin</h2>
            <h3>Début de la période de location</h3>
            <p>La période de location commence à la date de début convenue, ou au moment où Vernast met à disposition ou livre le Matériel loué, selon ce qui survient en premier.</p>
            <h3>Fin de la période de location</h3>
            <p>La période de location prend fin à la date de fin convenue, ou au moment où :</p>
            <ol type="a">
              <li>Le Matériel loué a été restitué par le Locataire et un accusé de réception a été délivré par Vernast.</li>
              <li>Le Matériel loué est enlevé par Vernast, conformément aux conditions de l'avis de fin de location. Si la durée de location convenue est expirée et que Vernast n'est pas en mesure d'enlever le Matériel loué à temps, le Locataire est censé tenir le Matériel loué prêt pour l'enlèvement et ne plus en faire usage à partir de ce moment. Si le Matériel loué est malgré tout utilisé après l'expiration de la durée de location et que cela est constaté, des frais supplémentaires sont facturés au Locataire.</li>
            </ol>
            <h3>Contrats à durée indéterminée</h3>
            <p>Si aucune date de fin spécifique n'a été convenue, le Contrat prend fin à la date mentionnée dans l'avis de fin de location.</p>
            <h3>Procédure de fin de location</h3>
            <p>Le Locataire doit signaler la fin de location du Matériel loué par e-mail, en mentionnant les informations suivantes : coordonnées, numéro de contrat, description du Matériel loué, date de fin souhaitée, lieu d'enlèvement, personne de contact et instructions pour le chauffeur.</p>
            <h3>Fin de location partielle</h3>
            <p>En cas de location de plusieurs articles, le Locataire peut signaler une fin de location partielle. Les frais supplémentaires qui en découlent sont à charge du Locataire. Le Contrat reste valable pour le Matériel loué restant jusqu'à la date de fin officielle.</p>
            <h3>Délai minimal de notification</h3>
            <p>Au moins un Jour ouvrable doit séparer l'avis de fin de location et la date de fin souhaitée. La date de fin souhaitée ne peut être antérieure à la date de fin initialement convenue, sauf convention contraire Par écrit.</p>
            <h3>Défaut en cas de non-restitution</h3>
            <p>Si le Matériel loué n'a pas été restitué ou correctement mis à disposition à la date convenue, le Locataire est immédiatement en défaut, sauf si une déclaration de vol a été faite.</p>
            <h3>Matériel loué non retiré</h3>
            <p>Si le Locataire omet de retirer le Matériel loué, les obligations (de paiement) restent d'application.</p>
            <h3>Fin anticipée</h3>
            <p>Un avis de fin de location ou une restitution anticipés du Matériel loué ne libèrent pas le Locataire de l'obligation de paiement jusqu'à la fin de la période de location convenue, sauf convention contraire Par écrit.</p>
            <h3>Interruptions de la période de location</h3>
            <p>La période de location n'est pas interrompue par les jours d'intempéries (de gel), les week-ends ou les jours fériés et de vacances, sauf convention contraire Par écrit.</p>
          </article>

          <article id="art6">
            <h2><em>Article 6</em>Enlèvement et Livraison du Matériel loué, Transfert des risques et Modalités de livraison</h2>
            <h3>Obligation d'enlèvement et responsabilité de la livraison</h3>
            <p>Sauf convention contraire, le Locataire retire le Matériel loué dans un site de Vernast, ou Vernast livre le Matériel loué à un endroit convenu.</p>
            <h3>Identification et confirmation de livraison</h3>
            <p>Lors du retrait, le Locataire ou son représentant doit justifier de son identité. La date et l'heure définitives de livraison sont confirmées par une invitation Google Agenda. Un SMS est envoyé environ 30 minutes avant l'arrivée.</p>
            <h3>Délais de livraison et communication</h3>
            <p>La date de livraison sélectionnée est indicative. Vernast s'efforce de livrer dans les 72 heures. Le jour de la livraison, l'heure d'arrivée prévue est communiquée, compte tenu des facteurs externes.</p>
            <h3>Installation et mesure d'humidité</h3>
            <p>Lors de l'installation, Vernast effectue une mesure d'humidité détaillée, dont les résultats sont consignés sur le bon de commande/de livraison. Des photos de ces mesures sont disponibles sur demande.</p>
            <h3>Assistance technique</h3>
            <p>Des techniciens compétents fournissent des conseils sur le processus de séchage. Pour les questions complexes, notre équipe technique en construction est joignable par e-mail.</p>
            <h3>Bon de livraison/de commande et procédure d'enlèvement</h3>
            <p>Tant lors de la livraison que lors de l'enlèvement, un bon de livraison/de commande est établi, qui doit être signé par le Locataire ou son représentant. La date et l'heure définitives d'enlèvement sont également confirmées par une invitation Google Agenda.</p>
            <h3>Transfert des risques</h3>
            <p>Le risque est transféré au Locataire au moment de la remise lors du retrait, ou lors de la livraison à l'endroit convenu.</p>
            <h3>Dépassement des délais de livraison</h3>
            <p>En cas de dépassement du délai de livraison, le Locataire est invité à en informer Vernast par écrit et de manière détaillée. Vernast s'efforce alors de livrer dans les 48 heures. Si la livraison n'a toujours pas eu lieu après ce délai, le Locataire a le droit de résoudre le Contrat.</p>
            <h3>Livraison partielle et accessibilité</h3>
            <p>Vernast peut opter pour une livraison partielle ou attendre que la commande complète soit prête. Le Locataire doit veiller à ce que le lieu de livraison soit accessible. Les frais supplémentaires dus à l'inaccessibilité ou à l'absence d'une personne habilitée sont à charge du Locataire.</p>
          </article>

          <article id="art7">
            <h2><em>Article 7</em>Inspection, Défauts et Signalements par le Locataire</h2>
            <h3>Inspection initiale et signalement</h3>
            <p>Dès la réception, le Locataire doit contrôler le Matériel loué afin de déceler les Défauts visibles. Les éventuels Défauts doivent être notés sur le bon de livraison ou signalés à Vernast Par écrit et de manière détaillée dans les 24 heures suivant la réception. Le Matériel loué est présumé avoir été livré en bon état et conformément au Contrat, sauf mention contraire sur le bon de livraison ou signalement dans le délai précité.</p>
            <h3>Défauts pendant la période de location</h3>
            <p>Si un Défaut apparaît pendant la période de location, le Locataire doit en informer Vernast Par écrit et de manière précise dans les 48 heures suivant sa découverte. Vernast s'efforcera de remédier au Défaut dans un délai raisonnable ou de livrer un Matériel loué de remplacement.</p>
            <h3>Déchéance du droit de réclamation</h3>
            <p>Le droit du Locataire d'introduire des réclamations à l'encontre de Vernast sur la base de Défauts est déchu si :</p>
            <ol>
              <li>Le signalement du Défaut n'a pas été effectué dans les délais fixés ou selon les modalités indiquées.</li>
              <li>Le Locataire ne collabore pas suffisamment à l'examen de la réclamation, ou ne permet pas à Vernast de réparer ou de remplacer le Défaut.</li>
              <li>Le Matériel loué a été utilisé ou entretenu de manière incorrecte ou dans des conditions inappropriées.</li>
              <li>Le Locataire a effectué ou fait effectuer des réparations ou des modifications sans l'accord préalable Par écrit de Vernast.</li>
              <li>Le Matériel loué a été mis en service ou son utilisation a été poursuivie après la découverte des Défauts.</li>
            </ol>
          </article>

          <article id="art8">
            <h2><em>Article 8</em>Restitution du Matériel loué et Transfert des risques</h2>
            <h3>Conditions de restitution</h3>
            <p>Le Locataire est tenu de restituer le Matériel loué à Vernast propre, en ordre et dans le même état qu'à la réception, compte tenu de l'usure normale, y compris toutes les clés, Informations et accessoires.</p>
            <h3>Enlèvement par Vernast</h3>
            <p>S'il a été convenu que Vernast enlève le Matériel loué, cet enlèvement aura normalement lieu à la date convenue ou indiquée dans l'avis de fin de location, généralement entre 08h00 et 20h00.</p>
            <h3>Accessibilité et disponibilité lors de l'enlèvement</h3>
            <p>Le Locataire veille à ce que le Matériel loué soit prêt pour le transport à l'endroit convenu et facilement accessible. Si ces conditions ne sont pas remplies, Vernast peut néanmoins décider d'emporter le Matériel loué, avec d'éventuels frais supplémentaires pour le Locataire.</p>
            <h3>Responsabilité du Locataire jusqu'à l'enlèvement</h3>
            <p>Jusqu'au moment de l'enlèvement par Vernast, mais au maximum deux Jours ouvrables complets après la fin de la période de location, le Locataire est responsable du Matériel loué et redevable des éventuelles amendes, dommages ou pertes.</p>
            <h3>Restitution à l'endroit convenu</h3>
            <p>Si le Locataire retire lui-même le Matériel loué, celui-ci doit être ramené à la date de fin à l'endroit convenu ou, à défaut, à l'endroit où il a été retiré, sauf indication contraire écrite de Vernast. Cela n'est possible que pendant les heures d'ouverture de l'agence concernée.</p>
            <h3>Contrôle après restitution</h3>
            <p>Après restitution, le Matériel loué est contrôlé par Vernast ou par un tiers. L'enlèvement ne vaut pas contrôle. Si le Locataire souhaite assister au contrôle, il doit le signaler lors de la conclusion du Contrat.</p>
            <h3>Salissures, emballage et constatation des dommages</h3>
            <p>Si des salissures, une contamination ou un emballage incorrect sont constatés en l'absence du Locataire, les constatations sont contraignantes et les frais sont répercutés sur le Locataire. En cas de dommages, le Locataire en est informé par écrit et un délai lui est accordé pour une contre-expertise. Passé ce délai, les frais de réparation ou de remplacement sont facturés.</p>
          </article>

          <article id="art9">
            <h2><em>Article 9</em>Responsabilités et Directives pour le Locataire</h2>
            <h3>Prescriptions d'utilisation</h3>
            <p>Le Locataire et toute personne qui utilise le Matériel loué au nom ou sous la responsabilité du Locataire doivent respecter les directives suivantes :</p>
            <ul>
              <li>L'utilisation du Matériel loué est limitée à la Belgique ou aux Pays-Bas, sauf convention contraire Par écrit.</li>
              <li>Le Matériel loué ne peut être utilisé que par des personnes disposant des qualifications, certificats et autorisations requis.</li>
              <li>L'utilisation doit être conforme aux lois et réglementations (inter)nationales applicables.</li>
              <li>Le Locataire est responsable de l'obtention et du maintien des autorisations et agréments nécessaires à l'utilisation du Matériel loué.</li>
              <li>Les modifications du Matériel loué ne sont pas autorisées, hormis ce qui est d'usage dans le cadre d'une utilisation normale.</li>
            </ul>
            <h3>Entretien et réparations</h3>
            <ul>
              <li>Le Locataire doit effectuer l'Entretien quotidien. Les dommages résultant d'un entretien incorrect ou insuffisant sont à charge du Locataire.</li>
              <li>Les réparations ne peuvent être effectuées que par Vernast, sauf s'il s'agit de petites réparations. Si un entretien est nécessaire, il est effectué par Vernast et les frais sont répercutés sur le Locataire.</li>
            </ul>
            <h3>Taxes et amendes</h3>
            <p>Le Locataire est responsable du paiement de l'ensemble des taxes, amendes et frais administratifs y afférents découlant de l'utilisation du Matériel loué pendant la période de location.</p>
            <h3>Sous-location et mise à disposition de tiers</h3>
            <p>Il est interdit au Locataire de sous-louer le Matériel loué ou de le mettre à la disposition de tiers sans l'accord exprès Par écrit de Vernast.</p>
            <h3>Accès au Matériel loué</h3>
            <p>Le Locataire doit à tout moment donner accès au Matériel loué à Vernast et aux personnes désignées, et garantir Vernast contre les prétentions de tiers.</p>
            <h3>Instructions au personnel</h3>
            <p>Le personnel de Vernast n'est pas tenu de suivre les instructions du Locataire ni d'effectuer des travaux sous la surveillance du Locataire.</p>
            <h3>Saisie et faillite</h3>
            <p>En cas de saisie, de sursis de paiement ou de faillite, le Locataire doit immédiatement informer les parties concernées des droits de Vernast et leur donner connaissance du Contrat.</p>
            <h3>Obligation de notification en cas de saisie</h3>
            <p>Le Locataire doit informer immédiatement Vernast Par écrit en cas de saisie ou de revendications portant sur le Matériel loué et lui fournir une copie des documents de saisie.</p>
          </article>

          <article id="art10">
            <h2><em>Article 10</em>Tarification et Modifications</h2>
            <h3>Prix conditionnels</h3>
            <p>Sauf convention contraire Par écrit, les prix indiqués par Vernast sont susceptibles de modifications. Ces modifications peuvent être fondées sur des facteurs tels que l'inflation, l'évolution du marché, les variations du coût des matériaux, des carburants, ou les modifications de la législation et de la réglementation.</p>
            <h3>Modifications de prix après le Contrat</h3>
            <p>Les prix convenus dans le Contrat s'appliquent spécifiquement aux prestations convenues. Vernast se réserve le droit d'augmenter les prix en cas de travaux supplémentaires, d'augmentations de coûts liées à l'exécution du Contrat (telles que les variations des frais de transport, des droits d'importation, des taxes, des salaires, des charges sociales et des taux de change) ou en raison de modifications de la législation.</p>
            <h3>Prix à la journée et à la semaine</h3>
            <p>Les prix à la journée, tels qu'indiqués sur le site web de Vernast, sont basés sur une période de location de 24 heures au maximum, et les prix à la semaine sur une période de 168 heures au maximum. Pour le Matériel loué équipé d'un compteur horaire, d'autres tarifs s'appliquent : un prix à la journée pour 8 heures d'utilisation au maximum et un prix à la semaine pour 40 heures d'utilisation au maximum. En cas de dépassement de ces limites, un supplément est appliqué.</p>
            <h3>Tarifs week-end</h3>
            <p>Le prix d'une location le week-end (du vendredi au lundi) est basé sur 72 heures de location au maximum, le dimanche n'étant pas facturé.</p>
            <h3>Longues périodes de location</h3>
            <p>Pour les périodes de location de plus de quatre semaines, les prix sont disponibles sur demande.</p>
            <h3>Exclusions des prix de location</h3>
            <p>Les prix de location indiqués s'entendent hors accessoires (obligatoires), entretien, consommables, carburant, huile, transport, chargement et déchargement, taxes environnementales, nettoyage et éventuels suppléments pour les régimes de rachat de dommages et d'incendie/vol.</p>
          </article>

          <article id="art11">
            <h2><em>Article 11</em>Dommages, perte et responsabilité du Locataire</h2>
            <h3>Déclaration des dommages</h3>
            <p>Le Locataire doit signaler Par écrit à Vernast tout dommage au Matériel loué survenu pendant la période de responsabilité, immédiatement après sa constatation et au plus tard dans les 24 heures.</p>
            <h3>Vol ou disparition</h3>
            <p>En cas de vol ou de disparition du Matériel loué, le Locataire doit le signaler à Vernast dans les 24 heures suivant la découverte et porter plainte auprès de la police, en mentionnant tous les détails pertinents du Matériel loué volé. Une copie du procès-verbal doit être remise à Vernast.</p>
            <h3>Conséquences de l'absence de déclaration</h3>
            <p>Le fait de ne pas porter plainte ou de ne pas produire le procès-verbal est considéré comme un détournement et entraîne la déchéance de toute couverture d'assurance ou de tout régime de rachat.</p>
            <h3>Date de fin du Contrat en cas de vol</h3>
            <p>La date présumée du vol, telle qu'indiquée dans le procès-verbal, est considérée comme la date de fin du Contrat pour le Matériel loué volé. Le Contrat reste valable pour les autres Matériels loués.</p>
            <h3>Responsabilité financière en cas de dommages ou de perte</h3>
            <p>En cas de vol ou de perte totale (« total loss ») du Matériel loué, le Locataire est tenu d'en rembourser la Valeur actuelle. Si une réparation est possible, le Locataire doit en supporter les frais.</p>
            <h3>Décompte en cas de récupération du matériel disparu</h3>
            <p>Si du Matériel loué disparu est retrouvé et restitué ultérieurement, le Locataire est redevable du loyer jusqu'à la date de restitution, diminué de la Valeur actuelle du Matériel loué restitué.</p>
            <h3>Constatation des dommages et frais de réparation</h3>
            <p>L'étendue des dommages et les frais de réparation et de nettoyage sont déterminés par Vernast ou par un expert désigné par elle.</p>
            <h3>Assurance et responsabilité</h3>
            <p>Vernast confirme qu'une assurance responsabilité civile a été souscrite pour les objets soumis à une obligation légale d'assurance. Néanmoins, le Locataire est responsable :</p>
            <ul>
              <li>Des dommages non couverts par l'assurance en raison d'exclusions légales.</li>
              <li>Des dommages causés sous l'influence de l'alcool ou de drogues.</li>
              <li>De la franchise prévue dans la police.</li>
              <li>Des dommages aux conduites, aux câbles, ou des dommages consécutifs à ceux-ci.</li>
              <li>Des amendes et frais liés à l'utilisation d'engins de chantier non immatriculés sur la voie publique.</li>
              <li>Des dommages hors circulation (risque d'exploitation) et relevant d'autres exclusions légales.</li>
            </ul>
          </article>

          <article id="art12">
            <h2><em>Article 12</em>Transport</h2>
            <h3>Risque en cas de transport propre par le Locataire</h3>
            <p>Lorsque le Locataire se charge du transport, le risque de perte ou d'endommagement du Matériel loué incombe au Locataire. Le Locataire doit emballer et charger/décharger le Matériel loué de manière adéquate, conformément à la nature du matériel et au mode de transport.</p>
            <h3>Intervention du personnel de Vernast</h3>
            <p>Si le personnel de Vernast aide au chargement/déchargement ou à l'attelage à la demande du Locataire, cela se fait aux risques du Locataire.</p>
          </article>

          <article id="art13">
            <h2><em>Article 13</em>Responsabilité de Vernast</h2>
            <h3>Responsabilité limitée</h3>
            <p>La responsabilité de Vernast est limitée aux dommages directs aux biens et aux personnes, causés par des Défauts démontrables du Matériel loué ou par un dol ou une imprudence consciente de Vernast. La responsabilité pour les dommages indirects, tels que la location de biens de remplacement, la perte de chiffre d'affaires et les dommages dus au retard, est expressément exclue.</p>
            <h3>Responsabilité maximale</h3>
            <p>Sauf en cas de dommages corporels ou de dommages causés intentionnellement, le montant maximal pour lequel Vernast peut être tenue responsable est limité au Montant de la commande ou à la valeur d'une facture périodique en cas de location de longue durée, sauf si l'assureur verse un montant supérieur.</p>
            <h3>Garantie par le Locataire</h3>
            <p>Le Locataire garantit Vernast contre les réclamations de tiers liées au Matériel loué.</p>
            <h3>Prescription de la responsabilité</h3>
            <p>La responsabilité de Vernast s'éteint douze mois après la date à laquelle le dommage est survenu.</p>
            <h3>Compensation des créances</h3>
            <p>Vernast peut compenser les éventuelles créances du Locataire avec des créances sur des sociétés liées au Locataire.</p>
          </article>

          <article id="art14">
            <h2><em>Article 14</em>Réservation et annulation</h2>
            <h3>Processus de réservation</h3>
            <p>Un Contrat contraignant naît lors de la réservation de Matériel loué par le Locataire.</p>
            <h3>Non-retrait en cas d'enlèvement</h3>
            <p>Si le Locataire ne retire pas le Matériel loué réservé au moment convenu, l'intégralité du prix de location est due.</p>
            <h3>Frais d'annulation en cas d'enlèvement</h3>
            <p>En cas d'annulation avant la mise à disposition du Matériel loué, les frais d'annulation suivants s'appliquent :</p>
            <ul>
              <li>60 % du Montant net de la commande en cas d'annulation entre 59 et 30 jours avant la date convenue.</li>
              <li>70 % du Montant net de la commande en cas d'annulation entre 29 et 10 jours avant la date convenue.</li>
              <li>80 % du Montant net de la commande en cas d'annulation après le 10e jour précédant la date convenue.</li>
            </ul>
            <h3>Non-réception en cas de livraison</h3>
            <p>Si le client opte pour la livraison du Matériel loué et que la livraison ne peut avoir lieu pour des raisons imputables au client (telles que l'inaccessibilité du lieu de livraison, l'absence d'une personne habilitée ou le non-respect d'autres conditions de livraison convenues), le Locataire est redevable de l'intégralité du prix de location et des éventuels frais supplémentaires, tels que des frais de transport supplémentaires.</p>
            <h3>Responsabilité et frais en cas d'échec de la livraison</h3>
            <p>Le Locataire est responsable de la création de conditions appropriées pour une livraison réussie. Si Vernast ne peut pas livrer le Matériel loué du fait du Locataire, tous les frais qui en découlent, y compris les secondes tentatives de livraison ou les frais de transport supplémentaires, sont à charge du Locataire.</p>
          </article>

          <article id="art15">
            <h2><em>Article 15</em>Facturation, Paiement et Conséquences du défaut</h2>
            <h3>Processus de facturation</h3>
            <p>La facturation par Vernast se fait sur la base d'un paiement anticipé. Les factures peuvent, au choix de Vernast, être envoyées par la poste ou par voie électronique à l'adresse e-mail du Locataire connue de Vernast.</p>
            <h3>Limitation de crédit et garanties</h3>
            <p>Vernast se réserve le droit de facturer un supplément pour limitation de crédit et/ou d'exiger d'autres garanties du Locataire.</p>
            <h3>Conditions de paiement</h3>
            <p>Les paiements doivent être effectués comme spécifié dans le Devis, le Contrat ou sur la facture de Vernast, sans aucune déduction ni compensation. Sauf mention contraire, les paiements doivent être effectués dans les 14 jours suivant la date de la facture. L'administration de Vernast fait foi des services prestés et des paiements dus, sauf preuve contraire apportée par le Locataire.</p>
            <h3>Défaut et conséquences</h3>
            <p>Si le paiement n'est pas effectué dans le délai imparti, le Locataire est de plein droit en défaut. Un dernier délai d'au moins 14 jours est accordé pour le paiement. À défaut de paiement, les intérêts légaux et les frais de recouvrement (extrajudiciaires) sont dus.</p>
            <h3>Frais en cas de mise en demeure</h3>
            <p>Le Locataire est redevable de tous les frais réellement exposés par Vernast pour le recouvrement et la sauvegarde de ses droits, y compris les frais de recouvrement judiciaires et extrajudiciaires, les dommages et les intérêts.</p>
            <h3>Frais de recouvrement</h3>
            <p>Les frais de recouvrement judiciaires et extrajudiciaires comprennent les frais des bureaux de recouvrement, des avocats et des huissiers de justice. Ces frais sont fixés à au moins 15 % du montant total dû, avec un minimum de 350 €.</p>
            <h3>Imputation des paiements</h3>
            <p>Les paiements effectués par le Locataire sont d'abord imputés sur les intérêts et les frais, puis sur les factures impayées les plus anciennes. En cas de dépassement du délai de paiement, les remises sont annulées et Vernast peut exiger l'intégralité du prix de location.</p>
            <h3>Faillite et saisie</h3>
            <p>En cas de demande de faillite, de sursis de paiement (provisoire), de cession d'entreprise, de cessation d'activité ou de saisie sur le patrimoine du Locataire, le Locataire est en défaut. Vernast peut alors résoudre le Contrat en tout ou en partie sans mise en demeure ni intervention judiciaire.</p>
            <h3>Droits en cas de résolution</h3>
            <p>En cas de résolution par Vernast, ou lorsque celle-ci en a la possibilité, Vernast a droit à des dommages et intérêts et conserve ses autres droits. Le Locataire n'a droit à aucune indemnité en cas d'une telle résolution.</p>
            <h3>Limitation de la résiliation anticipée</h3>
            <p>La résiliation anticipée du Contrat par le Locataire n'est pas possible sans l'accord exprès Par écrit de Vernast.</p>
          </article>

          <article id="art16">
            <h2><em>Article 16</em>Force majeure</h2>
            <h3>Suspension en cas de force majeure</h3>
            <p>Si Vernast ne peut pas remplir ses obligations envers le Locataire en raison d'un cas de force majeure, l'exécution du Contrat est suspendue tant que dure la situation de force majeure, avec un maximum de deux mois. Après cette période, les deux Parties ont le droit de résoudre le Contrat en tout ou en partie Par écrit.</p>
            <h3>Exclusion d'indemnisation</h3>
            <p>Vernast n'est redevable d'aucune indemnisation envers le Locataire si l'inexécution des obligations est due à un cas de force majeure.</p>
            <h3>Définition de la force majeure</h3>
            <p>La force majeure englobe toutes les circonstances indépendantes de la volonté de Vernast qui rendent l'exécution du Contrat déraisonnable, notamment les grèves, la guerre, les catastrophes naturelles, les épidémies, les pénuries de matières premières, les entraves au transport, les conditions météorologiques extrêmes, l'incendie, les pannes de machines, les problèmes de fournisseurs et les mesures prises par les autorités.</p>
          </article>

          <article id="art17">
            <h2><em>Article 17</em>Garantie locative</h2>
            <h3>Exigence d'une garantie locative</h3>
            <p>Sauf convention contraire Par écrit, le Locataire est redevable d'une garantie locative fixée par Vernast, à verser avant la mise à disposition du Matériel loué. Son montant est déterminé en fonction de la période de location et de la valeur du Matériel loué.</p>
            <h3>Objet de la garantie locative</h3>
            <p>La garantie locative ne sert ni d'acompte sur le prix de location ni de somme de rachat pour des risques tels que l'endommagement, le vol ou le détournement.</p>
            <h3>Conséquences du non-paiement de la garantie locative</h3>
            <p>Si la garantie locative n'est pas payée à temps, Vernast peut mettre fin unilatéralement au Contrat, sans préjudice de son droit à des dommages et intérêts.</p>
            <h3>Restitution et compensation</h3>
            <p>À la fin du Contrat, Vernast peut compenser les éventuels montants dus avec la garantie locative. Le remboursement a lieu après qu'il a été constaté que le Locataire a rempli toutes ses obligations.</p>
          </article>

          <article id="art18">
            <h2><em>Article 18</em>Informations et droits de Propriété intellectuelle</h2>
            <h3>Exactitude des Informations</h3>
            <p>Vernast s'efforce de garantir l'exactitude et l'exhaustivité des Informations, mais n'offre aucune garantie à cet égard et n'est pas responsable des inexactitudes dans les informations provenant de tiers, tels que les fabricants.</p>
            <h3>Droits de propriété intellectuelle</h3>
            <p>Les droits de propriété intellectuelle sur les Informations restent acquis aux ayants droit d'origine. Sans l'accord exprès Par écrit de Vernast, celles-ci ne peuvent être ni copiées ni communiquées à des tiers et doivent être restituées sur demande.</p>
            <h3>Utilisation des marques et logos</h3>
            <p>Les marques, noms commerciaux et logos de Vernast apposés sur le Matériel loué ne peuvent être ni masqués, ni endommagés, ni retirés par le Locataire.</p>
            <h3>Utilisation de la marque à des fins commerciales</h3>
            <p>Il est interdit au Locataire d'utiliser la marque, le nom commercial ou le logo de Vernast à ses propres fins commerciales sans accord préalable Par écrit.</p>
          </article>

          <article id="art19">
            <h2><em>Article 19</em>Assurances et Couverture des risques</h2>
            <h3>Responsabilité en cas de dommages et de disparition</h3>
            <p>Conformément à l'Article 11, le Locataire est responsable des dommages au Matériel loué ou de sa perte pendant la période de location. Le Locataire peut limiter cette responsabilité en souscrivant à l'un des régimes suivants ou aux deux, selon le Contrat spécifique.</p>
            <h3>Applicabilité des régimes de rachat</h3>
            <p>Tout le Matériel loué n'est pas éligible aux régimes de rachat. Lorsque des régimes de rachat sont possibles, ils sont généralement obligatoires. Ces régimes limitent le droit de recours de Vernast pour dommages à la franchise spécifiée.</p>
            <h3>Détails des régimes</h3>
            <p>Pour les détails et tarifs spécifiques des régimes, Vernast renvoie à ses « Conditions du régime de rachat de dommages et d'incendie/vol », disponibles dans chaque établissement et en ligne.</p>
            <h3>Régime de rachat de dommages</h3>
            <p>Ce régime limite le droit de recours de Vernast pour les dommages au Matériel loué, à l'exception des dommages dus à l'incendie, au vol, à une utilisation inappropriée, au dol ou à la négligence. Le supplément s'élève à 10 % du prix de location (sauf convention contraire), avec une franchise dépendant de la valeur à neuf du matériel.</p>
            <h3>Régime incendie/vol</h3>
            <p>Ce régime est spécifique à certains Locataires et limite le droit de recours de Vernast pour les dommages dus à l'incendie ou au vol, à l'exception des dommages dus au dol ou à l'imprudence et de quelques autres exceptions. Le supplément est un pourcentage du montant de la location, avec une franchise dépendant de la valeur à neuf.</p>
            <h3>Exigences en cas d'assurance propre</h3>
            <p>Si le Locataire souscrit sa propre assurance pour le Matériel loué, Vernast doit y être mentionnée comme bénéficiaire ou une attestation de couverture doit être fournie. Les franchises et les limitations de couverture n'affectent pas la responsabilité du Locataire.</p>
            <h3>Droits découlant de l'assurance Tous Risques Chantier</h3>
            <p>En cas d'assurance Tous Risques Chantier (TRC, en néerlandais CAR) souscrite par le Locataire, le Locataire déclare que Vernast peut, en qualité de coassurée, faire valoir des droits découlant de cette assurance. Les éventuelles franchises sont à charge du Locataire.</p>
          </article>

          <article id="art20">
            <h2><em>Article 20</em>Politique de confidentialité</h2>
            <h3>Utilisation des données à caractère personnel</h3>
            <p>Le Locataire accepte que Vernast utilise des données à caractère personnel pour la conclusion et l'exécution du Contrat, le recouvrement des paiements, la prévention de la fraude et le respect des obligations légales.</p>
            <h3>Respect du RGPD</h3>
            <p>Les deux Parties respecteront leurs obligations en vertu du RGPD. La politique de confidentialité de Vernast est disponible sur le site web et peut être modifiée de temps à autre. Les questions ou demandes relatives à la vie privée peuvent être adressées à <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
            <h3>Garanties relatives aux données à caractère personnel</h3>
            <p>Les deux Parties garantissent que les données à caractère personnel partagées sont exactes, non excessives et licites, et ne portent pas atteinte aux droits de tiers.</p>
            <h3>Obligation d'information du Locataire</h3>
            <p>Si Vernast l'estime nécessaire pour l'exécution du Contrat, le Locataire doit informer Vernast Par écrit de la manière dont il satisfait aux obligations du RGPD.</p>
            <h3>Géolocalisation et traceurs</h3>
            <p>Le Matériel loué peut être équipé de systèmes de géolocalisation ou de traceurs à des fins de prévention du vol et de lutte contre la fraude. Les données de localisation ne sont pas accessibles aux tiers, mais peuvent être utilisées par Vernast en cas de vol ou de fraude.</p>
          </article>

          <article id="art21">
            <h2><em>Article 21</em>Dispositions finales et Juridiction</h2>
            <h3>Litiges et droit applicable</h3>
            <p>Les litiges découlant du Contrat sont tranchés par le juge compétent d'Anvers selon le droit belge, sauf décision contraire de Vernast.</p>
            <h3>Citation du Locataire</h3>
            <p>Vernast se réserve le droit de citer le Locataire dans l'arrondissement où Vernast a ses bureaux.</p>
            <h3>Dérogation pour certains Locataires</h3>
            <p>Pour les litiges avec certains Locataires, le juge compétent est celui qui, selon le droit commun, peut connaître du litige.</p>
          </article>
        </div>
      </div>
    </section>
  </>
);

export default VoorwaardenFr;
