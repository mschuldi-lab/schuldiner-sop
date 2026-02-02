---
sidebar_position: 8
title: 🧫 Transformations
slug: /transformations
---

# Transformations

* You can make the PCR amplification for transformations ahead, to ease the workload on the day of transformation.

* You can keep PCR amplification products in -20°C for extended periods of time and get back to them if you need to repeat the transformation.

* If you encounter problems when trying to amplify a PCR cassette for transformation using Kapa Hifi polymerase (could be that you get 2 bands in the gel after running the cassette), consider changing the PCR program - longer time or more repeats for specific steps can increase the efficiency, as well as changing the Ta or adding 1ul of DMSO. Or try using a higher-fidelity polymerase such as Q5.


:::note
- If you want to do a check PCR on a strain with a plasmid (when the plasmid expresses a protein without a fluorophore) you should do it with KapaHifi and not GoTaq. Another option is to check for the presence of the amp resistance part and use GoTaq.
:::



:::note
- Before you order primers check if we have them in the database by the sequence, and not by name/gene. Sometimes people order the same primers under different names. It saves time and money. Also check the SWAT pYM primer collection (All SWAT pYM Excel sheet – there are pYM N’ tagging (F and R) and N’tag CHK R primers.xlsx) which can be found in for almost EVERY GENE here! Sometimes the WT CHK R is the same folder as the N’tag CHK R, so do check it here too.
:::


* Primers that were picked from the SWAT collection should be moved to a screw-cap tube (to reduce liquid loss) and given a number to be added to the general primer collection.


:::note
-If you are taking primers from the SWAT collection and notice the cover is a plastic one, then please spin down the plate and replace it with an aluminum cover. Do not pierce the plastic cover and repair it with a piece of aluminum.
:::



:::tip
- It is recommended to make sure that the primers fit your needs by looking at the plasmid map and sequence before ordering. It will save you time and effort in the future.
:::


* When you finish a primer in the common stock, order a new one and give it the same number. Do not add it as a ‘new’ primer to avoid duplications. If the concentration of the primer changed (since we now use 100mM) – update this information in the Excel!

* if you are ordering primers with value 1000 shekels or more, let Hanni know so she can make sure we have enough credit to cover it


:::danger
- After transformation: it is better to wait at least three days until all the negative colonies stop growing and the positives become clearer. We sometimes hurry this up and replicate/velvet without good reason.
:::



:::note
- After transformation – ALWAYS streak to singles even if something looks like it is one colony. You never know if the colony is really genetically homogenous and this could make your life very difficult later on if it is not. Only after streaking to singles take a colony for Check PCR and the same colony for growing in liquid and freezing etc.
:::


* If you transformed something that has antibiotics selection and you do not have time to wait until the recovery time is over (1 hour for G418 and Hygro, 3 hours for NAT), you can plate the transformed yeast on YPD plates and replicate using velvets onto selection containing plates the next day. You can also leave the cells to grow in liquid YPD and then plate with selection the next day.

* If you need to use an expression plasmid to mark an organelle, consult the file for organelle markers in our shared Dropbox.

* If you want to simply replace a selection marker in your strain, you can do that using designated plasmids in our plasmid list or using primers that will amplify a different selection from a plasmid of choice, where the promoter and terminator are the same as in your strain. This way, there will be a recombination in the promoter and terminator areas flanking the resistance and you will be able to swap it.

* It is very helpful to keep a good and clear file of all your transformations, so you can easily find what you did and with which primers (see suggestion below)

* When creating a strain with a contact site reporter using the "split-Venus” method, test both proteins of the contact site reporter, with the two parts of the Venus proteins (VC and VN). In some cases, you can get a better signal with one pair over the other.

* The BY4741 strain has only partial deletion of his3 gene and so revertants can come up. Therefore, HIS is not the most reliable selection. If possible, choose another selection.

* Before doing a transformation - think about the figure you want to show in the end and make sure you have all the right controls (for example - maybe you should also transform something into BY)


:::note
- Before performing any genomic modification to a gene, check in SGD if it is essential, if it has close homologs or if it’s overlapping another gene on the opposite strand. If the gene is essential and you still want to ‘delete’ it – consider adding Gal promotor and raise on S-Gal plates until experiment time.
:::



:::note
- You can use Blat (https://genome.ucsc.edu/cgi-bin/hgBlat) to check if a sequence of choice (gene, primer binding site) has multiple appearances in the genome. Make sure to choose S. cerevisiae genome for the search.
:::


* When planning Gal-promoter swap transformations think if the transformants would prefer being plated on Gal plates or Raf plates, rather than glucose plates (which would be, in essence, making deletions).


:::note
- When making deletions of mitochondrial proteins that might have a respiration phenotype, pick the smallest colonies to do check PCR (the big ones will be wrong) and consider plating on 4% glucose after transformation
:::


* For really sensitive strains you can do a “soft” transformation – 30’ in 30ºC and 15’ in 42ºC. If cells are super sensitive, you can wash them in 10%LiAc buffer instead of DDW, before adding transformation mix.

* If your transformation does not work twice consider re-ordering the primers. Sometimes even one point mutation in a primer inhibits homologous recombination and this occurs quite frequently!

* If your transformation still does not work after you have ordered new primers, consider doing it in a diploid (BY4743). This way, if the change to the genome was lethal, it will be covered by the second copy, and you can then see that was the reason.

* If a certain CHK PCR does not work repeatedly, make sure you allow enough annealing and extension time in your PCR program. If still does not work- use Kappa Hifi instead of GoTaq.


:::note
- Always make sure that you know which ladder you are using and check that your PCR product is the size that you thought it would be. Primer dimers run at the bottom of the gel (often below the smallest ladder marker) and often look like a PCR product, but they are not.
:::



:::note
- It is crucial to check a strain that has a visual phenotype with both check PCR AND microscopy before freezing - sometimes the positive colonies in the check PCR will show a different phenotype in the microscope than expected.
:::


* Before starting the transformation – make sure you have all the plates you need (type and quantity) for your plan (if you need YPD plates for example).

* Use positive and negative controls in your PCR to make sure you have taken the wanted product.

* You can back dilute straight to 15ml tubes and put in the rotor in the incubator under the autoclave in the hall.