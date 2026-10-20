import { exhibitions } from '../../content/exhibitions';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { OakCorner } from '../../components/ui/OakCorner';
import { VineCorner } from '../../components/ui/VineCorner';
import styles from '../pages.module.css';

export function SosCulele() {
  const exhibition = exhibitions.find((item) => item.id === 'sos-culele');

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.ornamentedHero}>
        <OakCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <VineCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <SectionHeading eyebrow="Manifest cultural" title="S.O.S. Culele din România" />
      </div>

      <div className={styles.pullQuote}>
        <blockquote>
          Culele sunt, alături de biserici, dintre cele mai vechi construcții pe pământul românesc. Au fost destul
          de multe, atâtea câte erau necesare, dar au rămas foarte puține, cu toate că ar fi fost necesare, pentru
          cultura noastră, toate.
        </blockquote>
      </div>

      <div className={styles.prose}>
        <p>
          Cele care mai există azi, mai mult ca sigur, doar supraviețuiesc, dar, după cum arată astăzi, nu se știe
          cât vor mai putea s-o facă singure.
        </p>
        <p>
          Noi, arhitecții României și oamenii de cultură din cadrul ANUC, semnalăm tuturor instituțiilor României cu
          putere și sarcini s-o facă (Președinție, Parlament, Guvern, Ministerul Culturii și Cultelor, ANUC) să
          demareze competent, cât mai urgent, o salvare a acestor monumente lăsate întru distrugere totală de către
          noii proprietari postrevoluționari, total indiferenți de istoria României, și să purceadă la o repunere
          în valoare a lor, bazată pe competențe profesionale și nu cu intervenții distructive, care mai apoi să
          intre sau să reintre într-un circuit turistic educațional.
        </p>
        <p>
          Dragilor, români, alăturați-vă ideii filialei noastre euroregionale Sud-Vest Oltenia a Uniunii
          Arhitecților din România, de a salva aceste dovezi, încă vizibile și palpabile, ale existenței culturii
          noastre într-o anume perioadă din istoria zbuciumată a neamului nostru, dându-vă acceptul pentru salvarea
          lor, în lumina celor lecturate mai sus.
        </p>
        <p>
          Cu prietenie, să ajungem să le revedem cât mai curând, într-un circuit turistic, măcar așa cum arătau prin
          1970, anul celor mai frumoase fotografii existente.
        </p>
        <p style={{ textAlign: 'right', fontStyle: 'italic' }}>Președinte, arh. Popescu Pavel</p>

        {exhibition?.callToAction && (
          <p style={{ textAlign: 'center' }}>
            <a className={styles.ctaButton} href={exhibition.callToAction.href}>
              {exhibition.callToAction.label}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
